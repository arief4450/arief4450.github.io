# Catch the Cat

[Play the game](https://arief4450.github.io/phaser-catch-the-cat/)

## How to play

* Click the small circles to surround the cat.
* Each time you click, the cat moves once.
* You win when you surround the cat, or you lose when the cat reaches the edge and escapes.

## Deployment

First, include the game framework `phaser.min.js`:

```html
<script src="phaser.min.js"></script>
```

Then include the game code `catch-the-cat.js`:

```html
<script src="catch-the-cat.js"></script>
```

Then create a canvas for the game in the specified div and start the game:

```html
<div id="catch-the-cat"></div>
<script>
    window.game = new CatchTheCatGame({
        w: 11,
        h: 11,
        r: 20,
        initialWallCount: 8,
        backgroundColor: 0xeeeeee,
        parent: 'catch-the-cat',
        statusBarAlign: 'center',
        credit: 'github.com/ganlvtech'
    });
</script>
```

Parameter list:

| Parameter | Value | Description |
| :---: | :---: | :--- |
| w | `11` | Number of columns |
| h | `11` | Number of rows |
| r | `20` | Circle radius in pixels |

Optional parameters:

| Parameter | Value | Description |
| :---: | :--- | :--- |
| backgroundColor | `0xeeeeee` | Background color |
| parent | `catch-the-cat` | Parent element id or DOM object |
| statusBarAlign | `center` | Status bar alignment: `left` or `center` |

## Write your own algorithm

Use the examples in `src/solvers/` as a reference to write your own algorithm, then replace it with:

```js
window.game.solver = yourSolver;
```

The solver’s return value indicates which direction the cat should move one step. If it hits a wall, the player wins.

| Value | Meaning |
| :---: | :--- |
| -1 | The cat forfeits voluntarily |
| 0 | Left |
| 1 | Up-left |
| 2 | Up-right |
| 3 | Right |
| 4 | Down-right |
| 5 | Down-left |

The cat stands at `*`, and the numbers are the direction indices:

```plain
 1 2
0 * 3
 5 4
```

Example:

```js
window.game.solver = function (blocksIsWall, i, j) {
    return 0;
};
```

That is: keep moving left until hitting a wall.

## Notes

* The game concept and the cat image come from [www.gamedesign.jp](https://www.gamedesign.jp/flash/chatnoir/chatnoir.html). The original game is called Chat Noir; I’m just trying to rewrite it in JavaScript.

## License

MIT License

