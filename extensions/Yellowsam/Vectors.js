// Name: Vectors
// ID: yellowsamvectors
// Description: Blocks relating to vectors and various actions with them.
// By: Yellowsam <https://scratch.mit.edu/users/yellowsam4145/>
// License: MPL-2.0

(function (Scratch) {
  // IIFE
  "use strict"; // Scrict mode

  if (!Scratch.extensions.unsandboxed) {
    // This extension uses util which I believe can only be used unsandboxed
    throw new Error("Extension Vectors must run unsandboxed!");
  }

  // Less typing!!!!!!
  const Cast = Scratch.Cast;
  const BlockType = Scratch.BlockType;
  const ArgumentType = Scratch.ArgumentType;

  class YellowsamVectors {
    // JS Class
    getInfo() {
      // Extension Function
      return {
        // Extension Metadata
        id: "yellowsamvectors", // ID (Should not be changed)
        name: "Vectors", // Name
        docsURI: "https://extensions.turbowarp.org/Yellowsam/Vectors", // Documentation
        color1: "#85b1ff", // Brightest (Block Color)
        color2: "#6ca4ff", // Slightly Darker (Menu Spaces)
        color3: "#4c97ff", // Darkest (Boolean Spaces)
        blocks: [
          {
            // ( position )
            opcode: "posasvec",
            blockType: BlockType.REPORTER,
            text: "position",
            filter: [Scratch.TargetType.SPRITE],
          },

          {
            // ( vector x: _ y: _ )
            opcode: "newvec",
            blockType: BlockType.REPORTER,
            text: "vector x: [X] y: [Y]",
            arguments: {
              X: {
                type: ArgumentType.NUMBER,
                defaultValue: 0,
              },
              Y: {
                type: ArgumentType.NUMBER,
                defaultValue: 0,
              },
            },
          },

          {
            // ( vector x: _ y: _ to x: _ y: _ )
            opcode: "loctoloc",
            blockType: BlockType.REPORTER,
            text: "vector x: [X1] y: [Y1] to x: [X2] y: [Y2]",
            arguments: {
              X1: {
                type: ArgumentType.NUMBER,
                defaultValue: 0,
              },
              Y1: {
                type: ArgumentType.NUMBER,
                defaultValue: 0,
              },
              X2: {
                type: ArgumentType.NUMBER,
                defaultValue: 1,
              },
              Y2: {
                type: ArgumentType.NUMBER,
                defaultValue: 1,
              },
            },
          },

          {
            // ( vector _ to _ )
            opcode: "vectovec",
            blockType: BlockType.REPORTER,
            text: "vector [VEC1] to [VEC2]",
            arguments: {
              VEC1: {
                type: ArgumentType.STRING,
                defaultValue: "0,0",
              },
              VEC2: {
                type: ArgumentType.STRING,
                defaultValue: "1,1",
              },
            },
          },

          {
            // ( _ direction to vector )
            opcode: "dirtovec",
            blockType: BlockType.REPORTER,
            text: "direction [NUM] to vector",
            arguments: {
              NUM: {
                type: ArgumentType.ANGLE,
                defaultValue: 0,
              },
            },
          },

          {
            // ( _ vector to direction )
            opcode: "vectodir",
            blockType: BlockType.REPORTER,
            text: "vector [VEC] to direction",
            arguments: {
              VEC: {
                type: ArgumentType.STRING,
                defaultValue: "0,0",
              },
            },
          },

          "---",

          {
            // ( vectors _ ? _ )
            opcode: "vecoperands",
            blockType: BlockType.REPORTER,
            text: "vectors [VEC1] [OPERAND] [VEC2]",
            arguments: {
              VEC1: {
                type: ArgumentType.STRING,
                defaultValue: "0,0",
              },
              VEC2: {
                type: ArgumentType.STRING,
                defaultValue: "1,1",
              },
              OPERAND: {
                type: ArgumentType.STRING,
                menu: "OPERANDS",
              },
            },
          },

          {
            // ( vector _ length ? _ )
            opcode: "veclenoperands",
            blockType: BlockType.REPORTER,
            text: "vector [VEC] length [OPERAND] [NUM]",
            arguments: {
              VEC: {
                type: ArgumentType.STRING,
                defaultValue: "0,0",
              },
              NUM: {
                type: ArgumentType.NUMBER,
                defaultValue: 0,
              },
              OPERAND: {
                type: ArgumentType.STRING,
                menu: "OPERANDS",
              },
            },
          },

          {
            // ( vector _ length _ )
            opcode: "setveclen",
            blockType: BlockType.REPORTER,
            text: "vector [VEC] length [NUM]",
            arguments: {
              VEC: {
                type: ArgumentType.STRING,
                defaultValue: "0,0",
              },
              NUM: {
                type: ArgumentType.NUMBER,
                defaultValue: 0,
              },
            },
          },

          "---",

          {
            // ( go to vector _ )
            opcode: "gotovec",
            blockType: BlockType.COMMAND,
            text: "go to vector [VEC]",
            filter: [Scratch.TargetType.SPRITE],
            arguments: {
              VEC: {
                type: ArgumentType.STRING,
                defaultValue: "0,0",
              },
            },
          },

          {
            // ( move by vector _ )
            opcode: "movebyvec",
            blockType: BlockType.COMMAND,
            text: "move by vector [VEC]",
            filter: [Scratch.TargetType.SPRITE],
            arguments: {
              VEC: {
                type: ArgumentType.STRING,
                defaultValue: "0,0",
              },
            },
          },

          "---",

          {
            // ( vector _ ? )
            opcode: "vecproperty",
            blockType: BlockType.REPORTER,
            text: "vector [VEC] [PROP]",
            arguments: {
              VEC: {
                type: ArgumentType.STRING,
                defaultValue: "0,0",
              },
              PROP: {
                type: ArgumentType.STRING,
                menu: "PROPS",
              },
            },
          },

          {
            // ( vectors' _ _ dot product )
            opcode: "vecdotproduct",
            blockType: BlockType.REPORTER,
            text: "vectors' [VEC1] [VEC2] dot product",
            arguments: {
              VEC1: {
                type: ArgumentType.STRING,
                defaultValue: "0,0",
              },
              VEC2: {
                type: ArgumentType.STRING,
                defaultValue: "1,1",
              },
            },
          },

          {
            // ( vectors' _ _ distance )
            opcode: "vecdist",
            blockType: BlockType.REPORTER,
            text: "vectors' [VEC1] [VEC2] distance",
            arguments: {
              VEC1: {
                type: ArgumentType.STRING,
                defaultValue: "0,0",
              },
              VEC2: {
                type: ArgumentType.STRING,
                defaultValue: "1,1",
              },
            },
          },

          "---",

          {
            // ( _ radians to degrees )
            opcode: "radianstodegrees",
            blockType: BlockType.REPORTER,
            text: "[NUM] radians to degrees",
            arguments: {
              NUM: {
                type: ArgumentType.NUMBER,
                defaultValue: 0,
              },
            },
          },

          {
            // ( _ degrees to radians )
            opcode: "degreestoradians",
            blockType: BlockType.REPORTER,
            text: "[NUM] degrees to radians",
            arguments: {
              NUM: {
                type: ArgumentType.ANGLE,
                defaultValue: 0,
              },
            },
          },
        ], // blocks:
        menus: {
          PROPS: {
            // Properties
            acceptReporters: true,
            items: ["x", "y", "length"],
          },
          OPERANDS: {
            // Operands
            acceptReporters: true,
            items: ["+", "-", "*", "/"],
          },
        }, // menu:
        // Icons
        menuIconURI:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjAwIiB6b29tQW5kUGFuPSJtYWduaWZ5IiB2aWV3Qm94PSIwIDAgNDUwIDQ0OS45OTk5ODQiIGhlaWdodD0iNjAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2ZXJzaW9uPSIxLjAiPjxkZWZzPjxjbGlwUGF0aCBpZD0iODg4NzA5OGNkNiI+PHBhdGggZD0iTSAyMjUgMCBDIDEwMC43MzQzNzUgMCAwIDEwMC43MzQzNzUgMCAyMjUgQyAwIDM0OS4yNjU2MjUgMTAwLjczNDM3NSA0NTAgMjI1IDQ1MCBDIDM0OS4yNjU2MjUgNDUwIDQ1MCAzNDkuMjY1NjI1IDQ1MCAyMjUgQyA0NTAgMTAwLjczNDM3NSAzNDkuMjY1NjI1IDAgMjI1IDAgWiBNIDIyNSAwICIgY2xpcC1ydWxlPSJub256ZXJvIi8+PC9jbGlwUGF0aD48Y2xpcFBhdGggaWQ9IjZiYzQ4M2YwZGIiPjxwYXRoIGQ9Ik0gMCAwIEwgNDUwIDAgTCA0NTAgNDUwIEwgMCA0NTAgWiBNIDAgMCAiIGNsaXAtcnVsZT0ibm9uemVybyIvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSJjNmZjYWNiMmMyIj48cGF0aCBkPSJNIDIyNSAwIEMgMTAwLjczNDM3NSAwIDAgMTAwLjczNDM3NSAwIDIyNSBDIDAgMzQ5LjI2NTYyNSAxMDAuNzM0Mzc1IDQ1MCAyMjUgNDUwIEMgMzQ5LjI2NTYyNSA0NTAgNDUwIDM0OS4yNjU2MjUgNDUwIDIyNSBDIDQ1MCAxMDAuNzM0Mzc1IDM0OS4yNjU2MjUgMCAyMjUgMCBaIE0gMjI1IDAgIiBjbGlwLXJ1bGU9Im5vbnplcm8iLz48L2NsaXBQYXRoPjxjbGlwUGF0aCBpZD0iZWFmZTczMWY3MyI+PHJlY3QgeD0iMCIgd2lkdGg9IjQ1MCIgeT0iMCIgaGVpZ2h0PSI0NTAiLz48L2NsaXBQYXRoPjxjbGlwUGF0aCBpZD0iZmE3MDQwN2M1NyI+PHBhdGggZD0iTSA0MCA5NyBMIDM5NiA5NyBMIDM5NiAzMjYgTCA0MCAzMjYgWiBNIDQwIDk3ICIgY2xpcC1ydWxlPSJub256ZXJvIi8+PC9jbGlwUGF0aD48Y2xpcFBhdGggaWQ9IjRhYjA3ODVkMDMiPjxwYXRoIGQ9Ik0gNDMwLjQ1NzAzMSAyODYuNTMxMjUgTCA4Ny4xMTcxODggMzkyLjY0ODQzOCBMIDE2LjU2NjQwNiAxNjQuMzY3MTg4IEwgMzU5LjkwNjI1IDU4LjI1MzkwNiBaIE0gNDMwLjQ1NzAzMSAyODYuNTMxMjUgIiBjbGlwLXJ1bGU9Im5vbnplcm8iLz48L2NsaXBQYXRoPjxjbGlwUGF0aCBpZD0iZjY0YzY5M2I3NyI+PHBhdGggZD0iTSAyOTguNzE0ODQ0IDI1MC43NDIxODggTCA3Mi44OTg0MzggMzIwLjUzNTE1NiBDIDY4Ljk0MTQwNiAzMjEuNzU3ODEyIDY0LjczODI4MSAzMTkuNTM5MDYyIDYzLjUxNTYyNSAzMTUuNTgyMDMxIEwgNDAuNTY2NDA2IDI0MS4zMjgxMjUgQyAzOS4zNDM3NSAyMzcuMzcxMDk0IDQxLjU1ODU5NCAyMzMuMTY3OTY5IDQ1LjUxOTUzMSAyMzEuOTQ1MzEyIEwgMjcxLjMzOTg0NCAxNjIuMTUyMzQ0IEMgMjcyLjk2ODc1IDE2MS42NDg0MzggMjc0LjI0MjE4OCAxNjAuMzgyODEyIDI3NC43NTM5MDYgMTU4Ljc1NzgxMiBDIDI3NS4yNjU2MjUgMTU3LjEzMjgxMiAyNzQuOTQ5MjE5IDE1NS4zNjMyODEgMjczLjkwMjM0NCAxNTQuMDE5NTMxIEwgMjMyLjYwMTU2MiAxMDAuOTA2MjUgQyAyMzIuMDc4MTI1IDEwMC4yMzA0NjkgMjMyLjA4MjAzMSA5OS4yODUxNTYgMjMyLjYwOTM3NSA5OC42MTMyODEgQyAyMzMuMTM2NzE5IDk3Ljk0MTQwNiAyMzQuMDU4NTk0IDk3LjcxNDg0NCAyMzQuODM1OTM4IDk4LjA2NjQwNiBMIDM5MS4xMDU0NjkgMTY4LjQ2MDkzOCBDIDM5Mi44MzU5MzggMTY5LjIzODI4MSAzOTQuMTQ4NDM4IDE3MC43MjY1NjIgMzk0LjcwNzAzMSAxNzIuNTM5MDYyIEMgMzk1LjI2OTUzMSAxNzQuMzUxNTYyIDM5NS4wMjM0MzggMTc2LjMyMDMxMiAzOTQuMDM1MTU2IDE3Ny45NDE0MDYgTCAzMDQuNzM0Mzc1IDMyNC4yMzA0NjkgQyAzMDQuMjg5MDYyIDMyNC45NjA5MzggMzAzLjQwMjM0NCAzMjUuMjkyOTY5IDMwMi41ODk4NDQgMzI1LjAzNTE1NiBDIDMwMS43NzM0MzggMzI0Ljc3NzM0NCAzMDEuMjM0Mzc1IDMyNCAzMDEuMjg5MDYyIDMyMy4xNDQ1MzEgTCAzMDUuNDE3OTY5IDI1Ni4wMTE3MTkgQyAzMDUuNTIzNDM4IDI1NC4zMTI1IDMwNC43ODUxNTYgMjUyLjY3MTg3NSAzMDMuNDQ5MjE5IDI1MS42MTcxODggQyAzMDIuMTA5Mzc1IDI1MC41NjY0MDYgMzAwLjMzOTg0NCAyNTAuMjM4MjgxIDI5OC43MTQ4NDQgMjUwLjc0MjE4OCBaIE0gMjk4LjcxNDg0NCAyNTAuNzQyMTg4ICIgY2xpcC1ydWxlPSJub256ZXJvIi8+PC9jbGlwUGF0aD48Y2xpcFBhdGggaWQ9ImNhNmY1NDQwNGIiPjxwYXRoIGQ9Ik0gMCAwLjY3OTY4OCBMIDM1NS4yODEyNSAwLjY3OTY4OCBMIDM1NS4yODEyNSAyMjguNDQxNDA2IEwgMCAyMjguNDQxNDA2IFogTSAwIDAuNjc5Njg4ICIgY2xpcC1ydWxlPSJub256ZXJvIi8+PC9jbGlwUGF0aD48Y2xpcFBhdGggaWQ9IjViNDAwMDNiMTAiPjxwYXRoIGQ9Ik0gMzkwLjQ1NzAzMSAxODkuNTMxMjUgTCA0Ny4xMTcxODggMjk1LjY0ODQzOCBMIC0yMy40MzM1OTQgNjcuMzY3MTg4IEwgMzE5LjkwNjI1IC0zOC43NDYwOTQgWiBNIDM5MC40NTcwMzEgMTg5LjUzMTI1ICIgY2xpcC1ydWxlPSJub256ZXJvIi8+PC9jbGlwUGF0aD48Y2xpcFBhdGggaWQ9IjBhOGMzMjY2ZTMiPjxwYXRoIGQ9Ik0gMjU4LjcxNDg0NCAxNTMuNzQyMTg4IEwgMzIuODk4NDM4IDIyMy41MzUxNTYgQyAyOC45NDE0MDYgMjI0Ljc1NzgxMiAyNC43MzgyODEgMjIyLjUzOTA2MiAyMy41MTU2MjUgMjE4LjU4MjAzMSBMIDAuNTY2NDA2IDE0NC4zMjgxMjUgQyAtMC42NTYyNSAxNDAuMzcxMDk0IDEuNTU4NTk0IDEzNi4xNjc5NjkgNS41MTk1MzEgMTM0Ljk0NTMxMiBMIDIzMS4zMzk4NDQgNjUuMTUyMzQ0IEMgMjMyLjk2ODc1IDY0LjY0ODQzOCAyMzQuMjQyMTg4IDYzLjM4MjgxMiAyMzQuNzUzOTA2IDYxLjc1NzgxMiBDIDIzNS4yNjU2MjUgNjAuMTMyODEyIDIzNC45NDkyMTkgNTguMzYzMjgxIDIzMy45MDIzNDQgNTcuMDE5NTMxIEwgMTkyLjYwMTU2MiAzLjkwNjI1IEMgMTkyLjA3ODEyNSAzLjIzMDQ2OSAxOTIuMDgyMDMxIDIuMjg1MTU2IDE5Mi42MDkzNzUgMS42MTMyODEgQyAxOTMuMTM2NzE5IDAuOTQxNDA2IDE5NC4wNTg1OTQgMC43MTQ4NDQgMTk0LjgzNTkzOCAxLjA2NjQwNiBMIDM1MS4xMDU0NjkgNzEuNDYwOTM4IEMgMzUyLjgzNTkzOCA3Mi4yMzgyODEgMzU0LjE0ODQzOCA3My43MjY1NjIgMzU0LjcwNzAzMSA3NS41MzkwNjIgQyAzNTUuMjY5NTMxIDc3LjM1MTU2MiAzNTUuMDIzNDM4IDc5LjMyMDMxMiAzNTQuMDM1MTU2IDgwLjk0MTQwNiBMIDI2NC43MzQzNzUgMjI3LjIzMDQ2OSBDIDI2NC4yODkwNjIgMjI3Ljk2MDkzOCAyNjMuNDAyMzQ0IDIyOC4yOTI5NjkgMjYyLjU4OTg0NCAyMjguMDM1MTU2IEMgMjYxLjc3MzQzOCAyMjcuNzc3MzQ0IDI2MS4yMzQzNzUgMjI3IDI2MS4yODkwNjIgMjI2LjE0NDUzMSBMIDI2NS40MTc5NjkgMTU5LjAxMTcxOSBDIDI2NS41MjM0MzggMTU3LjMxMjUgMjY0Ljc4NTE1NiAxNTUuNjcxODc1IDI2My40NDkyMTkgMTU0LjYxNzE4OCBDIDI2Mi4xMDkzNzUgMTUzLjU2NjQwNiAyNjAuMzM5ODQ0IDE1My4yMzgyODEgMjU4LjcxNDg0NCAxNTMuNzQyMTg4IFogTSAyNTguNzE0ODQ0IDE1My43NDIxODggIiBjbGlwLXJ1bGU9Im5vbnplcm8iLz48L2NsaXBQYXRoPjxjbGlwUGF0aCBpZD0iMDM2ZWYyOGZhMCI+PHJlY3QgeD0iMCIgd2lkdGg9IjM1NiIgeT0iMCIgaGVpZ2h0PSIyMjkiLz48L2NsaXBQYXRoPjwvZGVmcz48ZyBjbGlwLXBhdGg9InVybCgjODg4NzA5OGNkNikiPjxnIHRyYW5zZm9ybT0ibWF0cml4KDEsIDAsIDAsIDEsIDAsIDApIj48ZyBjbGlwLXBhdGg9InVybCgjZWFmZTczMWY3MykiPjxnIGNsaXAtcGF0aD0idXJsKCM2YmM0ODNmMGRiKSI+PGcgY2xpcC1wYXRoPSJ1cmwoI2M2ZmNhY2IyYzIpIj48cmVjdCB4PSItOTkiIHdpZHRoPSI2NDgiIGZpbGw9IiM4NWIxZmYiIGhlaWdodD0iNjQ3Ljk5OTk3NyIgeT0iLTk4Ljk5OTk5NiIgZmlsbC1vcGFjaXR5PSIxIi8+PC9nPjwvZz48L2c+PC9nPjwvZz48ZyBjbGlwLXBhdGg9InVybCgjZmE3MDQwN2M1NykiPjxnIGNsaXAtcGF0aD0idXJsKCM0YWIwNzg1ZDAzKSI+PGcgY2xpcC1wYXRoPSJ1cmwoI2Y2NGM2OTNiNzcpIj48ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCA0MCwgOTcpIj48ZyBjbGlwLXBhdGg9InVybCgjMDM2ZWYyOGZhMCkiPjxnIGNsaXAtcGF0aD0idXJsKCNjYTZmNTQ0MDRiKSI+PGcgY2xpcC1wYXRoPSJ1cmwoIzViNDAwMDNiMTApIj48ZyBjbGlwLXBhdGg9InVybCgjMGE4YzMyNjZlMykiPjxwYXRoIGZpbGw9IiMwMDZiZmYiIGQ9Ik0gMzk0LjM1NTQ2OSAxOTIuMzYzMjgxIEwgNDguMjUzOTA2IDI5OS4zMjgxMjUgTCAtMjQuNTc0MjE5IDYzLjY4MzU5NCBMIDMyMS41MjczNDQgLTQzLjI4MTI1IFogTSAzOTQuMzU1NDY5IDE5Mi4zNjMyODEgIiBmaWxsLW9wYWNpdHk9IjEiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9zdmc+",
        // Icon for the sidebar

        // blockIconURI: "" Icon on block(s) (Unused here)
      }; // return
    } // getInfo()

    // Code

    newvec({ X, Y }) {
      // Make a vector
      return Cast.toString([Cast.toNumber(X), Cast.toNumber(Y)]);
    }

    vecproperty({ VEC, PROP }) {
      // Get something about a vector
      VEC = Cast.toString(VEC).split(",");
      VEC = [Cast.toNumber(VEC[0]), Cast.toNumber(VEC[1])];
      switch (PROP) {
        case "x":
          return VEC[0];
        case "y":
          return VEC[1];
        case "length":
          return Cast.toNumber(Math.hypot(VEC[0], VEC[1]));
        default:
          return 0;
      }
    }

    vecoperands({ VEC1, VEC2, OPERAND }) {
      // Do something to a vector using another vector
      VEC1 = Cast.toString(VEC1).split(",");
      VEC1 = [Cast.toNumber(VEC1[0]), Cast.toNumber(VEC1[1])];
      VEC2 = Cast.toString(VEC2).split(",");
      VEC2 = [Cast.toNumber(VEC2[0]), Cast.toNumber(VEC2[1])];
      switch (OPERAND) {
        case "+":
          return Cast.toString([
            Cast.toNumber(VEC1[0] + VEC2[0]),
            Cast.toNumber(VEC1[1] + VEC2[1]),
          ]);
        case "-":
          return Cast.toString([
            Cast.toNumber(VEC1[0] - VEC2[0]),
            Cast.toNumber(VEC1[1] - VEC2[1]),
          ]);
        case "*":
          return Cast.toString([
            Cast.toNumber(VEC1[0] * VEC2[0]),
            Cast.toNumber(VEC1[1] * VEC2[1]),
          ]);
        case "/":
          return Cast.toString([
            Cast.toNumber(VEC1[0] / VEC2[0]),
            Cast.toNumber(VEC1[1] / VEC2[1]),
          ]);
        default:
          return "0,0";
      }
    }

    setveclen({ VEC, NUM }) {
      // Sets a vector's length
      VEC = Cast.toString(VEC).split(",");
      VEC = [Cast.toNumber(VEC[0]), Cast.toNumber(VEC[1])];
      NUM = Cast.toNumber(NUM);
      return Cast.toString([
        Cast.toNumber((VEC[0] / Math.hypot(VEC[0], VEC[1])) * NUM),
        Cast.toNumber((VEC[1] / Math.hypot(VEC[0], VEC[1])) * NUM),
      ]);
    }

    posasvec(args, util) {
      // Position as a vector
      const target = util.target;
      if (target.isStage) {
        return Cast.toString([0, 0]);
      } else {
        return Cast.toString([target.x, target.y]);
      }
    }

    gotovec({ VEC }, util) {
      // Take a vector as X and Y coords to go to
      const target = util.target;
      VEC = Cast.toString(VEC).split(",");
      VEC = [Cast.toNumber(VEC[0]), Cast.toNumber(VEC[1])];
      if (!target.isStage) {
        target.setXY(VEC[0], VEC[1]);
      }
    }

    movebyvec({ VEC }, util) {
      // Take a vector as a 2D vector to move by
      const target = util.target;
      VEC = Cast.toString(VEC).split(",");
      VEC = [Cast.toNumber(VEC[0]), Cast.toNumber(VEC[1])];
      if (!target.isStage) {
        target.setXY(VEC[0] + target.x, VEC[1] + target.y);
      }
    }

    radianstodegrees({ NUM }) {
      // Convert radians to degrees
      NUM = Cast.toNumber(NUM);
      return (NUM * 180) / Math.PI;
    }

    degreestoradians({ NUM }) {
      // Convert degrees to radians
      NUM = Cast.toNumber(NUM);
      return (NUM * Math.PI) / 180;
    }

    dirtovec({ NUM }) {
      // Turn a direction to a vector (Slightly inaccurate due to sin and cos)
      NUM = Cast.toNumber(NUM);
      return Cast.toString([
        Cast.toNumber(Math.sin((NUM * Math.PI) / 180).toFixed(6)),
        Cast.toNumber(Math.cos((NUM * Math.PI) / 180).toFixed(6)),
      ]);
    }

    vectodir({ VEC }) {
      // Turn a vector to a direction (Potentialy inaccurate)
      VEC = Cast.toString(VEC).split(",");
      VEC = [Cast.toNumber(VEC[0]), Cast.toNumber(VEC[1])];
      return Cast.toNumber((Math.atan2(VEC[0], VEC[1]) * 180) / Math.PI);
    }

    veclenoperands({ VEC, NUM, OPERAND }) {
      // Changes a vector's length
      VEC = Cast.toString(VEC).split(",");
      VEC = [Cast.toNumber(VEC[0]), Cast.toNumber(VEC[1])];
      NUM = Cast.toNumber(NUM);
      switch (OPERAND) {
        case "+":
          NUM = NUM + Cast.toNumber(Math.hypot(VEC[0], VEC[1]));
          break;
        case "-":
          NUM = NUM - Cast.toNumber(Math.hypot(VEC[0], VEC[1]));
          break;
        case "*":
          NUM = NUM * Cast.toNumber(Math.hypot(VEC[0], VEC[1]));
          break;
        case "/":
          NUM = NUM / Cast.toNumber(Math.hypot(VEC[0], VEC[1]));
          break;
        default:
          NUM = 0;
      }
      return Cast.toString([
        Cast.toNumber((VEC[0] / Math.hypot(VEC[0], VEC[1])) * NUM),
        Cast.toNumber((VEC[1] / Math.hypot(VEC[0], VEC[1])) * NUM),
      ]);
    }

    loctoloc({ X1, Y1, X2, Y2 }) {
      // Vector from one point to another
      return Cast.toString([
        Cast.toNumber(X2) - Cast.toNumber(X1),
        Cast.toNumber(Y2) - Cast.toNumber(Y1),
      ]);
    }

    vectovec({ VEC1, VEC2 }) {
      // Vector from one vector to another
      VEC1 = Cast.toString(VEC1).split(",");
      VEC1 = [Cast.toNumber(VEC1[0]), Cast.toNumber(VEC1[1])];
      VEC2 = Cast.toString(VEC2).split(",");
      VEC2 = [Cast.toNumber(VEC2[0]), Cast.toNumber(VEC2[1])];
      return Cast.toString([VEC2[0] - VEC1[0], VEC2[1] - VEC1[1]]);
    }

    vecdotproduct({ VEC1, VEC2 }) {
      // Dot product of a vector
      VEC1 = Cast.toString(VEC1).split(",");
      VEC1 = [Cast.toNumber(VEC1[0]), Cast.toNumber(VEC1[1])];
      VEC2 = Cast.toString(VEC2).split(",");
      VEC2 = [Cast.toNumber(VEC2[0]), Cast.toNumber(VEC2[1])];
      return Cast.toNumber(VEC1[0] * VEC2[0] + VEC1[1] * VEC2[1]);
    }

    vecdist({ VEC1, VEC2 }) {
      // Distance between two vectors
      VEC1 = Cast.toString(VEC1).split(",");
      VEC1 = [Cast.toNumber(VEC1[0]), Cast.toNumber(VEC1[1])];
      VEC2 = Cast.toString(VEC2).split(",");
      VEC2 = [Cast.toNumber(VEC2[0]), Cast.toNumber(VEC2[1])];
      return Cast.toNumber(Math.hypot(VEC2[0] - VEC1[0], VEC2[1] - VEC1[1]));
    }
  } // Class YellowsamVectors

  // Register
  Scratch.extensions.register(new YellowsamVectors()); // new [JS Class]()
})(Scratch); // IIFE
