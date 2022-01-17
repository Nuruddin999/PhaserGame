import { Scene } from "phaser";
export class LoadingScene extends Scene {
  king: Phaser.GameObjects.Sprite | undefined;
  constructor() {
    super("loading-scene");
  }

  preload(): void {
    this.load.baseURL = "assets/";
    this.load.image("king", "sprites/king.png");
    this.load.atlas(
      "a-king",
      "spritesheets/a-king.png",
      "spritesheets/a-king_atlas.json"
    );
    this.load.image({
      key: "dungeon",
      url: "tilemaps/tiles/dungeon.png",
    });
    this.load.tilemapTiledJSON("dngn", "tilemaps/json/dngn.json");
    this.load.spritesheet("tiles_spr", "tilemaps/tiles/dungeon.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
  }

  create(): void {
    this.scene.start("level-1-scene");
  }
}
