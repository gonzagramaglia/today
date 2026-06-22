"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Info } from 'lucide-react';
import { useLanguage } from "../../contexts/language-context";
import { useGame } from "../../contexts/game-context";

interface Obstacle {
    x: number;
    y?: number;
    width: number;
    height: number;
    health: number;
    maxHealth: number;
    isInvincible?: boolean;
}

interface Projectile {
    x: number;
    y: number;
    power: number;
}

// type GameMode = 'classic' | 'insane';

export const DinoGame: React.FC = () => {
    const { t } = useLanguage();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [gameOver, setGameOver] = useState(false);
    const [isNewHighScore, setIsNewHighScore] = useState(false);
    const { gameMode, setGameMode } = useGame();
    const scoreRef = useRef(0);
    const scoreDisplayRef = useRef<HTMLSpanElement>(null);
    const [highScore, setHighScore] = useState(() => {
        if (typeof window === 'undefined') return 0;
        
        const saved = localStorage.getItem('dino-high-score');
        const savedTime = localStorage.getItem('dino-high-score-time');

        if (saved && savedTime) {
            const lastReset = parseInt(savedTime);
            const now = new Date();

            // Find the most recent Friday 23:59 that has passed
            let lastFriday = new Date(now);
            while (lastFriday.getDay() !== 5) {
                lastFriday.setDate(lastFriday.getDate() - 1);
            }
            lastFriday.setHours(23, 59, 0, 0);

            // If now is Friday but before 23:59, the "relevant" reset was the PREVIOUS Friday
            if (now.getDay() === 5 && (now.getHours() < 23 || (now.getHours() === 23 && now.getMinutes() < 59))) {
                lastFriday.setDate(lastFriday.getDate() - 7);
            }

            if (lastReset < lastFriday.getTime()) {
                localStorage.removeItem('dino-high-score');
                localStorage.removeItem('dino-high-score-time');
                return 0;
            }
            return parseInt(saved);
        }
        return 0;
    });

    useEffect(() => {
        localStorage.setItem('dino-high-score', highScore.toString());
        localStorage.setItem('dino-high-score-time', Date.now().toString());
    }, [highScore]);

    const [gameStarted, setGameStarted] = useState(false);
    // ... existing constants ...
    // Game constants
    const CANVAS_WIDTH = 800;
    const CANVAS_HEIGHT = 200;
    const DINO_WIDTH = 40;
    const DINO_HEIGHT = 40;
    const GROUND_Y = 180;
    const JUMP_FORCE = 6.4;
    const GRAVITY = 0.15;
    const INITIAL_SPEED = 2.0;
    const SPEED_INCREMENT = 0.0005;
    const HORIZONTAL_SPEED = 2.5;
    const INITIAL_DRAG_SPEED = 0.25;
    const DRAG_INCREMENT = 0.0001;
    const DINO_INITIAL_X = 50;

    // Game state refs (for the loop)
    const dinoY = useRef(GROUND_Y - DINO_HEIGHT);
    const dinoX = useRef(DINO_INITIAL_X);
    const dinoVelocity = useRef(0);
    const isJumping = useRef(false);
    const obstacles = useRef<Obstacle[]>([]);
    const gameSpeed = useRef(INITIAL_SPEED);
    const frameCount = useRef(0);
    const animationFrameId = useRef<number | null>(null);
    const handImage = useRef<HTMLImageElement | null>(null);
    const shovelImage = useRef<HTMLImageElement | null>(null);
    const rockImage = useRef<HTMLImageElement | null>(null);
    const copsImage = useRef<HTMLImageElement | null>(null);
    const keysPressed = useRef<{ [key: string]: boolean }>({});
    const projectiles = useRef<Projectile[]>([]);
    const lastShootTime = useRef(0);
    const kPressStartTime = useRef<number | null>(null);
    const gameOverTime = useRef(0);
    const [chargePower, setChargePower] = useState(0);
    const SHOOT_COOLDOWN = 350; // ms


    useEffect(() => {
        const hand = new Image();
        hand.src = '/hand.png';
        hand.onload = () => {
            handImage.current = hand;
        };

        const shovel = new Image();
        shovel.src = '/shovel.png';
        shovel.onload = () => {
            shovelImage.current = shovel;
        };

        const rock = new Image();
        rock.src = '/rock.png';
        rock.onload = () => {
            rockImage.current = rock;
        };

        const cops = new Image();
        cops.src = '/cops.png';
        cops.onload = () => {
            copsImage.current = cops;
        };
    }, []);

    const startGame = () => {
        setGameOver(false);
        setIsNewHighScore(false);
        setGameStarted(true);
        scoreRef.current = 0;
        if (scoreDisplayRef.current) {
            scoreDisplayRef.current.innerText = '00000';
        }
        dinoY.current = GROUND_Y - DINO_HEIGHT;
        dinoX.current = DINO_INITIAL_X;
        dinoVelocity.current = 0;
        isJumping.current = false;
        obstacles.current = [];
        projectiles.current = [];
        kPressStartTime.current = null;
        setChargePower(0);
        gameSpeed.current = gameMode === 'insane' ? INITIAL_SPEED * 1.5 : INITIAL_SPEED;
        frameCount.current = 0;
        keysPressed.current = {};
    };

    const jump = () => {
        if (!isJumping.current && gameStarted && !gameOver) {
            dinoVelocity.current = -JUMP_FORCE;
            isJumping.current = true;
        } else if (!gameStarted || (gameOver && Date.now() - gameOverTime.current > 1000)) {
            startGame();
        }
    };

    const shoot = (power: number = 1) => {
        const now = Date.now();
        if (gameMode === 'insane' && gameStarted && !gameOver && now - lastShootTime.current > SHOOT_COOLDOWN) {
            projectiles.current.push({
                x: dinoX.current + DINO_WIDTH,
                y: dinoY.current + DINO_HEIGHT / 2 - (10 * power),
                power: power
            });
            lastShootTime.current = now;
        }
    };

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (isMobile && gameMode === 'insane') {
            setGameMode('classic');
        }
    }, [isMobile, gameMode]);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            keysPressed.current[e.code] = true;

            // Prevent scrolling with game keys
            if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
                e.preventDefault();
            }

            // Jumping & Starting
            if (!gameStarted || gameOver) {
                if (!gameStarted || (gameOver && Date.now() - gameOverTime.current > 1000)) {
                    e.preventDefault();
                    startGame();
                }
                return;
            }

            // Normal game keys when game is running
            const jumpKeys = e.code === 'ArrowUp' || e.code === 'KeyW' || (e.code === 'Space' && gameMode === 'classic');

            if (jumpKeys) {
                e.preventDefault();
                jump();
            }

            // Charging (Space in Insane mode)
            if (e.code === 'Space' && gameMode === 'insane' && gameStarted && !gameOver && !kPressStartTime.current) {
                e.preventDefault();
                kPressStartTime.current = Date.now();
            }
        };

        const handleKeyUp = (e: KeyboardEvent) => {
            keysPressed.current[e.code] = false;

            if (e.code === 'Space' && gameMode === 'insane' && kPressStartTime.current) {
                const pressDuration = Date.now() - kPressStartTime.current;
                // Power scales more moderately: from 0.7 to 2.2
                const power = Math.min(2.2, 0.7 + (pressDuration / 600));
                shoot(power);
                kPressStartTime.current = null;
                setChargePower(0);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [gameStarted, gameOver, gameMode]);

    useEffect(() => {
        if (gameMode !== 'insane') return;

        const interval = setInterval(() => {
            if (kPressStartTime.current) {
                const duration = Date.now() - kPressStartTime.current;
                setChargePower(Math.min(100, (duration / 600) * 100));
            }
        }, 50);
        return () => clearInterval(interval);
    }, [gameMode]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const update = () => {
            if (!gameStarted || gameOver) return;

            frameCount.current++;
            const speedInc = gameMode === 'insane' ? SPEED_INCREMENT * 2 : SPEED_INCREMENT;
            gameSpeed.current += speedInc;

            // Update Dino
            dinoVelocity.current += GRAVITY;
            dinoY.current += dinoVelocity.current;

            if (dinoY.current > GROUND_Y - DINO_HEIGHT) {
                dinoY.current = GROUND_Y - DINO_HEIGHT;
                dinoVelocity.current = 0;
                isJumping.current = false;
            }

            // Update Horizontal Position (Only in Insane mode)
            if (gameMode === 'insane') {
                // Gradual drag back
                const currentDrag = INITIAL_DRAG_SPEED + (frameCount.current * DRAG_INCREMENT);
                dinoX.current -= currentDrag;

                if (keysPressed.current['ArrowLeft'] || keysPressed.current['KeyA']) {
                    dinoX.current -= HORIZONTAL_SPEED;
                }
                if (keysPressed.current['ArrowRight'] || keysPressed.current['KeyD']) {
                    dinoX.current = Math.min(CANVAS_WIDTH - DINO_WIDTH, dinoX.current + HORIZONTAL_SPEED);
                }

                // Game Over if pushed COMPLETELY off-screen to the left
                if (dinoX.current <= -DINO_WIDTH) {
                    setGameOver(true);
                    gameOverTime.current = Date.now();
                    if (scoreRef.current > highScore) {
                        setHighScore(scoreRef.current);
                        setIsNewHighScore(true);
                    }
                }
            } else {
                dinoX.current = DINO_INITIAL_X;
            }

            // Update Obstacles
            const obstacleFreq = gameMode === 'insane' ? 50 : 65;
            const freq = Math.floor(obstacleFreq / (gameSpeed.current / 5));
            
            if (frameCount.current === 1 || frameCount.current % freq === 0) {
                if (frameCount.current === 1 || Math.random() > (gameMode === 'insane' ? 0.2 : 0.3)) {
                    // Generate diverse obstacle shapes (width and height)
                    const type = Math.random();
                    let w, h;
                    if (type < 0.25) { // Tall and thin
                        w = 15 + Math.random() * 10;
                        h = 40 + Math.random() * 20;
                    } else if (type < 0.5) { // Short and wide
                        w = 40 + Math.random() * 30;
                        h = 20 + Math.random() * 15;
                    } else if (type < 0.75) { // Big
                        w = 40 + Math.random() * 20;
                        h = 40 + Math.random() * 20;
                    } else { // Small
                        w = 20 + Math.random() * 10;
                        h = 20 + Math.random() * 10;
                    }

                    const health = gameMode === 'insane' ? Math.floor(Math.random() * 3) + 1 : 1;
                    const isCop = gameMode === 'insane' && Math.random() < 0.2; // 20% chance for cops in insane

                    // Cops always have fixed size: double height of dino
                    // Width is adjusted to maintain a better car-like aspect ratio (approx 3/2)
                    const finalH = isCop ? DINO_HEIGHT * 2 : h;
                    const finalW = isCop ? 110 : w;

                    obstacles.current.push({
                        x: CANVAS_WIDTH,
                        y: isCop ? GROUND_Y - finalH + 18 : (gameMode === 'insane' ? Math.random() * (GROUND_Y - finalH) : GROUND_Y - finalH),
                        width: finalW,
                        height: finalH,
                        health: isCop ? Infinity : health,
                        maxHealth: isCop ? Infinity : health,
                        isInvincible: isCop
                    });
                }
            }

            // Update Projectiles
            projectiles.current = projectiles.current.filter(p => {
                p.x += 5;
                return p.x < CANVAS_WIDTH;
            });

            obstacles.current = obstacles.current.filter((obs) => {
                obs.x -= gameSpeed.current;

                // Collision detection
                const dinoBox = {
                    x: dinoX.current + 5,
                    y: dinoY.current + 5, // Slightly more forgiving top
                    width: DINO_WIDTH - 10,
                    height: DINO_HEIGHT - 10, // Slightly more forgiving bottom
                };

                const obsBox = {
                    x: obs.x + (obs.isInvincible ? 15 : 10),
                    y: (obs.y ?? GROUND_Y - obs.height) + (obs.isInvincible ? 12 : 10), // Lower top
                    width: obs.width - (obs.isInvincible ? 30 : 20),
                    height: obs.height - (obs.isInvincible ? 20 : 25), // Much shorter from bottom
                };

                if (
                    dinoBox.x < obsBox.x + obsBox.width &&
                    dinoBox.x + dinoBox.width > obsBox.x &&
                    dinoBox.y < obsBox.y + obsBox.height &&
                    dinoBox.y + dinoBox.height > obsBox.y
                ) {
                    setGameOver(true);
                    gameOverTime.current = Date.now();
                    if (scoreRef.current > highScore) {
                        setHighScore(scoreRef.current);
                        setIsNewHighScore(true);
                    }
                }

                // Projectile collision
                projectiles.current = projectiles.current.filter(p => {
                    const size = 12 + (8 * p.power);
                    const pBox = { x: p.x, y: p.y, width: size, height: size };
                    if (
                        pBox.x < obsBox.x + obsBox.width &&
                        pBox.x + pBox.width > obsBox.x &&
                        pBox.y < obsBox.y + obsBox.height &&
                        pBox.y + pBox.height > obsBox.y
                    ) {
                        if (!obs.isInvincible) {
                            obs.health -= p.power;
                        }
                        return false;
                    }
                    return true;
                });

                return obs.x + obs.width > 0 && obs.health > 0;
            });

            const newScore = Math.floor(frameCount.current / 5);
            if (newScore !== scoreRef.current) {
                scoreRef.current = newScore;
                if (scoreDisplayRef.current) {
                    scoreDisplayRef.current.innerText = newScore.toString().padStart(5, '0');
                }
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

            // Draw Ground
            ctx.beginPath();
            ctx.moveTo(0, GROUND_Y);
            ctx.lineTo(CANVAS_WIDTH, GROUND_Y);
            ctx.strokeStyle = '#555';
            ctx.lineWidth = 2;
            ctx.stroke();

            // Draw Hand (Player)
            const dX = dinoX.current;
            const dY = dinoY.current;

            if (handImage.current) {
                ctx.drawImage(handImage.current, dX, dY, DINO_WIDTH, DINO_HEIGHT);
            } else {
                ctx.save();
                ctx.translate(dX, dY);
                ctx.fillStyle = '#ffdbac';
                ctx.beginPath();
                ctx.roundRect(0, 0, DINO_WIDTH, DINO_HEIGHT, 5);
                ctx.fill();
                ctx.restore();
            }

            // Draw Obstacles (Cropped and Varied Shovels)
            obstacles.current.forEach((obs) => {
                const drawY = obs.y ?? GROUND_Y - obs.height;
                if (obs.isInvincible && copsImage.current) {
                    ctx.drawImage(copsImage.current, obs.x, drawY, obs.width, obs.height);
                } else if (!obs.isInvincible && shovelImage.current) {
                    const img = shovelImage.current;
                    // Crop logic: 1/3 left and 1/3 right removed. Middle 1/3 kept.
                    const sx = img.naturalWidth / 3;
                    const sw = img.naturalWidth / 3;
                    const sy = 0;
                    const sh = img.naturalHeight;

                    ctx.drawImage(
                        img,
                        sx, sy, sw, sh,     // Source (middle 1/3)
                        obs.x, drawY, obs.width, obs.height // Target
                    );

                    // Draw Health Bar
                    if (gameMode === 'insane' && !obs.isInvincible) {
                        const barWidth = obs.width;
                        const barHeight = 4;
                        ctx.fillStyle = '#ef4444';
                        ctx.fillRect(obs.x, drawY - 10, barWidth, barHeight);
                        ctx.fillStyle = '#22c55e';
                        ctx.fillRect(obs.x, drawY - 10, barWidth * (obs.health / obs.maxHealth), barHeight);
                    }
                } else {
                    // Fallback
                    ctx.fillStyle = '#94a3b8';
                    ctx.fillRect(obs.x, obs.y ?? GROUND_Y - obs.height, obs.width, obs.height);
                }
            });

            // Draw Projectiles
            projectiles.current.forEach(p => {
                const size = 12 + (8 * p.power);
                if (rockImage.current) {
                    ctx.drawImage(rockImage.current, p.x, p.y, size, size);
                } else {
                    ctx.fillStyle = '#666';
                    ctx.beginPath();
                    ctx.arc(p.x + size / 2, p.y + size / 2, size / 2, 0, Math.PI * 2);
                    ctx.fill();
                }
            });

            if (!gameStarted) {
                ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
                ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

                const isVisible = (Date.now() % 4500) < 3000;
                if (isVisible) {
                    ctx.fillStyle = 'white';
                    ctx.font = isMobile ? '28px Inter, system-ui, sans-serif' : '24px Inter, system-ui, sans-serif';
                    ctx.textAlign = 'center';
                    ctx.fillText(isMobile ? t('gameStartMobile') : t('gameStart'), CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
                }
            }

            if (gameOver) {
                ctx.fillStyle = isNewHighScore ? 'rgba(34, 197, 94, 0.2)' : 'rgba(255, 0, 0, 0.2)';
                ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
                ctx.fillStyle = '#333';
                ctx.font = 'bold 30px Inter, system-ui, sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText(isNewHighScore ? t('gameNewHighScore') : t('gameOver'), CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 20);
                if (Date.now() - gameOverTime.current > 1000) {
                    const isVisible = (Date.now() % 4500) < 3000;
                    if (isVisible) {
                        ctx.font = isMobile ? '24px Inter, system-ui, sans-serif' : '20px Inter, system-ui, sans-serif';
                        ctx.fillText(isMobile ? t('gameRestartMobile') : t('gameRestart'), CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 20);
                    }
                }
            }
        };

        let lastTime = 0;
        let accumulator = 0;
        const fpsInterval = 1000 / 60; // 60 logic ticks per second

        const loop = (timestamp: number) => {
            if (!lastTime) lastTime = timestamp;
            const deltaTime = timestamp - lastTime;
            lastTime = timestamp;

            accumulator += Math.min(deltaTime, 100);

            while (accumulator >= fpsInterval) {
                update();
                accumulator -= fpsInterval;
            }

            draw();

            animationFrameId.current = requestAnimationFrame(loop);
        };

        animationFrameId.current = requestAnimationFrame(loop);

        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [gameStarted, gameOver, highScore, t, isMobile, gameMode]);

    return (
        <div className="flex flex-col items-center w-full max-w-4xl mx-auto bg-white/50 backdrop-blur-sm p-4 md:p-8 rounded-3xl border border-white/20 shadow-xl px-3 md:px-8">
            <div className="w-full flex justify-between items-center mb-4 px-2">
                <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider text-neutral-500 font-bold">{t('gameScore')}</span>
                    <span ref={scoreDisplayRef} className="text-2xl font-black text-neutral-800 tabular-nums">00000</span>
                </div>
                <div className="flex flex-col items-end group relative">
                    <div className="flex items-center gap-1.5 cursor-default md:cursor-help">
                        <span className="text-xs uppercase tracking-wider text-neutral-500 font-bold">{isMobile ? t('gameHighScoreMobile') : t('gameHighScore')}</span>
                        <Info size={14} className="hidden md:block text-neutral-400 group-hover:text-[#6866D6] transition-colors" />
                    </div>
                    <span className="text-2xl font-black text-[#6866D6] tabular-nums">{highScore.toString().padStart(5, '0')}</span>

                    {/* Tooltip - Only visible on desktop/hover */}
                    <div className="hidden md:block absolute top-0 right-0 -translate-y-[115%] opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-50">
                        <div className="bg-neutral-900 text-white text-xs py-2 px-3 rounded-xl shadow-2xl whitespace-nowrap border border-white/10 backdrop-blur-md">
                            {t('gameHighScoreReset')}
                            {/* Bottom Arrow */}
                            <div className="absolute -bottom-1 right-3 w-2 h-2 bg-neutral-900 rotate-45 border-r border-b border-white/10" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-full aspect-[4/1] bg-neutral-50 rounded-2xl border-2 border-dashed border-neutral-200 overflow-hidden cursor-pointer" onClick={jump}>
                <canvas
                    ref={canvasRef}
                    width={CANVAS_WIDTH}
                    height={CANVAS_HEIGHT}
                    className="w-full h-full"
                />
            </div>

            <div className={`${isMobile ? 'mt-4' : 'mt-8'} flex flex-col items-center gap-6`}>
                {/* First Line: Actions */}
                <div className="flex flex-wrap justify-center items-center gap-4">
                    <div
                        className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full shadow-sm border border-neutral-100 cursor-pointer active:scale-95 transition-transform select-none touch-none"
                        onClick={jump}
                    >
                        {!isMobile && (
                            <div className="flex gap-1">
                                {gameMode === 'classic' && (
                                    <kbd className="px-1.5 py-0.5 bg-neutral-100 rounded border border-neutral-300 text-neutral-800 text-[10px] font-bold uppercase">{t('gameKeySpace')}</kbd>
                                )}
                                <kbd className="px-1.5 py-0.5 bg-neutral-100 rounded border border-neutral-300 text-neutral-800 text-[10px] font-bold">W</kbd>
                                <kbd className="px-1.5 py-0.5 bg-neutral-100 rounded border border-neutral-300 text-neutral-800 text-[10px] font-bold">↑</kbd>
                            </div>
                        )}
                        <span className="text-neutral-500 text-xs font-bold uppercase tracking-wider">{isMobile ? t('gameJumpMobile') : t('gameJump')}</span>
                    </div>

                    {gameMode === 'insane' && !isMobile && (
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full shadow-sm border border-neutral-100 select-none">
                            <div className="flex gap-1">
                                <kbd className="px-1.5 py-0.5 bg-neutral-100 rounded border border-neutral-300 text-neutral-800 text-[10px] font-bold">A</kbd>
                                <kbd className="px-1.5 py-0.5 bg-neutral-100 rounded border border-neutral-300 text-neutral-800 text-[10px] font-bold">D</kbd>
                                <kbd className="px-1.5 py-0.5 bg-neutral-100 rounded border border-neutral-300 text-neutral-800 text-[10px] font-bold">←</kbd>
                                <kbd className="px-1.5 py-0.5 bg-neutral-100 rounded border border-neutral-300 text-neutral-800 text-[10px] font-bold">→</kbd>
                            </div>
                            <span className="text-neutral-500 text-xs font-bold uppercase tracking-wider">{t('gameMove')}</span>
                        </div>
                    )}

                    {gameMode === 'insane' && (
                        <div
                            className="relative flex items-center gap-2 px-3 py-1.5 bg-neutral-800 text-white rounded-full shadow-sm cursor-pointer active:scale-95 transition-transform select-none touch-none overflow-hidden group/shoot"
                            onMouseDown={() => { if (!isMobile) kPressStartTime.current = Date.now(); }}
                            onMouseUp={() => { if (!isMobile && kPressStartTime.current) { shoot(Math.min(2.2, 0.7 + ((Date.now() - kPressStartTime.current) / 600))); kPressStartTime.current = null; setChargePower(0); } }}
                            onTouchStart={(e) => { e.preventDefault(); kPressStartTime.current = Date.now(); }}
                            onTouchEnd={(e) => { e.preventDefault(); if (kPressStartTime.current) { shoot(Math.min(2.2, 0.7 + ((Date.now() - kPressStartTime.current) / 600))); kPressStartTime.current = null; setChargePower(0); } }}
                        >
                            <div
                                className="absolute inset-0 bg-orange-600 transition-all duration-75 origin-left"
                                style={{ width: `${chargePower}%`, opacity: chargePower > 0 ? 1 : 0 }}
                            />

                            <div className="relative z-10 flex items-center gap-2">
                                {!isMobile && (
                                    <kbd className="px-2 py-0.5 bg-neutral-700 rounded border border-neutral-600 text-white text-[10px] font-bold group-hover/shoot:border-neutral-500 transition-colors uppercase">{t('gameKeySpace')}</kbd>
                                )}
                                <span className="text-xs font-bold uppercase tracking-wider">{t('gameShoot')}</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Second Line: Mode Switch (Hidden on mobile) */}
                {!isMobile && (
                    <div className="flex items-center gap-2 p-1.5 bg-neutral-100/50 rounded-2xl border border-neutral-200">
                        <button
                            onClick={() => { setGameMode('classic'); startGame(); }}
                            className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all cursor-pointer ${gameMode === 'classic' ? 'bg-[#6866D6] text-white shadow-md scale-105' : 'text-neutral-400 hover:bg-neutral-200'}`}
                        >
                            {t('gameModeClassic')}
                        </button>
                        <button
                            onClick={() => { setGameMode('insane'); startGame(); }}
                            className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all cursor-pointer ${gameMode === 'insane' ? 'bg-[#ff4b4b] text-white shadow-md scale-105' : 'text-neutral-400 hover:bg-neutral-200'}`}
                        >
                            {t('gameModeInsane')}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
