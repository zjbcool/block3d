declare module BABYLON {
  export class App {
    engine: Engine;
    scene: Scene;
    camera: ArcRotateCamera | TargetCamera | FreeCamera;
    fps: number;
    running: boolean;
    _glob: object;
    glob: object;
    constructor(private canvas: HTMLCanvasElement);
    setup(): void;
    resize: () => void;
    beforeRun(): void;
    run(): void;
    stop(): void;
    getFps(): number;
    dispose(): void;
  }
}
declare module BABYLON {
  export const apps: App[]
}
