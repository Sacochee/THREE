/*
let d : coordonee | undefined = undefined
    if (ref == null) 
      if(lst[i].getGroupeUuid() == obj.getGroupeUuid() && lst[i].getGroupeUuid() != null && obj.getGroupeUuid() != null){
        continue
      }else {
        ref = lst[i]
        d = getDistance(obj, lst[i]);
      }
    else {
      if( typeof d == typeof undefined){
        continue
      }else{
        console.log(d, ref)
        console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj")
      const r = getDistance(obj, ref);
     
      if (Math.abs(d.x * d.y) < Math.abs(r.x * r.y) && (ref.getGroupeUuid() != obj.getGroupeUuid() || obj.getGroupeUuid() == null) ){ 
        console.log(obj.getGroupeUuid())
        console.log(ref.getGroupeUuid())
        console.log(ref.getGroupeUuid() != obj.getGroupeUuid())
        console.log("--------------------------")
        ref = lst[i];

      }
      }
      
    }





    export function proxyPlug(scene: THREE.Scene, obj: MeshPiece) {
  console.log("start", obj.getIndex())
  const lst: MeshPiece[] = [];
  scene.children.forEach((item) => {
    if (item instanceof MeshPiece && item.id != obj.id) {
      lst.push(item);
    }
  });
 

  let ref: MeshPiece | null = null;

  //get ref Piece
  
  for (const piece of lst) {
    if (piece.getGroupeUuid() != null && obj.getGroupeUuid() != null) {
      
      if (piece.getGroupeUuid() != obj.getGroupeUuid()) {
        if (ref == null) {
          ref = piece;
          continue;
        }
      } else {
        continue;
      }
    } else {
      if (ref == null) {
        ref = piece;
        continue;
      }
    }

    const d = getDistance(obj, piece);
   
    const refD = getDistance(obj, ref);
    
    if (Math.abs(d.x+0.0001 * d.y+0.0001) < Math.abs(refD.x+0.0001 * refD.y+0.0001)) {
      
      ref = piece;
    }
  }

  if (ref == null) {
    console.log("ref est null ", ref);
    Selected.setObj();
    return;
  }

  console.log(ref.getIndex(), "la base")
  const distance = getDistance(obj, ref);
  
  //savoir si assez proche
  if (Math.abs(distance.x) < 1.5 && Math.abs(distance.y) < 1.5) {
    

    //determiner le coter
    if (Math.abs(distance.x) < Math.abs(distance.y)) {
      // line
      if (distance.y > 0 && ref.getPoss("top") == obj.getIndex()) {
        plug(obj, ref, "top");
        addGroupe(obj, ref);
        // top
      } else if (ref.getPoss("bottom") == obj.getIndex()) {
        //bottom
        plug(obj, ref, "bottom");
        addGroupe(obj, ref);
      } else {
        obj.position.x = 0;
        obj.position.y = 0;
      }
    } else {
      //side
      if (distance.x > 0 && ref.getPoss("rigth") == obj.getIndex()) {
        // rigth
        
        plug(obj, ref, "rigth");
        addGroupe(obj, ref);
      } else if (ref.getPoss("left") == obj.getIndex()) {
        //left
        
        plug(obj, ref, "left");
        addGroupe(obj, ref);
      } else {
        obj.position.x = 0;
        obj.position.y = 0;
      }
    }
  }

  Selected.setObj();
}

function getDistance(obj1: MeshPiece, obj2: MeshPiece): coordonee {
  const x = obj1.position.x - obj2.position.x;
  const y = obj1.position.y - obj2.position.y;

  return { x, y };
}

function plug(
  target: MeshPiece,
  base: MeshPiece,
  type: "left" | "rigth" | "top" | "bottom"
) {
  switch (type) {
    case "left":
      target.position.set(base.position.x - 1, base.position.y, -0.5);
      return;
    case "rigth":
      target.position.set(base.position.x + 1, base.position.y, -0.5);
      return;
    case "top":
      target.position.set(base.position.x, base.position.y + 1, -0.5);
      return;
    case "bottom":
      target.position.set(base.position.x, base.position.y - 1, -0.5);
      return;
  }
}

function addGroupe(obj: MeshPiece, base: MeshPiece) {
  let bool = true;
  const grp = findGourpe(obj);
  for (const groupe of groupes) {
    if (groupe.contains(base)) {
      bool = false;
      
      if (grp != null && grp != groupe) {
        const liste = grp.delete();
        
      } else {
        groupe.add(obj);
      }
      return
    }
  }
  if(grp != null){
    bool = false
    grp.add(base)
    grp.mouve(obj)
  }
  bool && groupes.push(new Groupe(obj, base));
}



*/
/*
{
  //   "id": 4,
  //   "cote": { "left": null, "rigth": 11, "top": 5, "bottom": 3 },
  //   "possition": { "x": 4, "y": 4 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 5,
  //   "cote": { "left": null, "rigth": 12, "top": 6, "bottom": 4 },
  //   "possition": { "x": 5, "y": 5 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 6,
  //   "cote": { "left": null, "rigth": 13, "top": null, "bottom": 5 },
  //   "possition": { "x": 6, "y": 6 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 7,
  //   "cote": { "left": 0, "rigth": 14, "top": 8, "bottom": null },
  //   "possition": { "x": 7, "y": 7 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 8,
  //   "cote": { "left": 1, "rigth": 15, "top": 9, "bottom": 7 },
  //   "possition": { "x": 8, "y": 8 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 9,
  //   "cote": { "left": 2, "rigth": 16, "top": 10, "bottom": 8 },
  //   "possition": { "x": 9, "y": 9 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 10,
  //   "cote": { "left": 3, "rigth": 17, "top": 11, "bottom": 9 },
  //   "possition": { "x": 10, "y": 10 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 11,
  //   "cote": { "left": 4, "rigth": 18, "top": 12, "bottom": 10 },
  //   "possition": { "x": 11, "y": 11 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 12,
  //   "cote": { "left": 5, "rigth": 19, "top": 13, "bottom": 11 },
  //   "possition": { "x": 12, "y": 12 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 13,
  //   "cote": { "left": 6, "rigth": 20, "top": null, "bottom": 12 },
  //   "possition": { "x": 13, "y": 13 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 14,
  //   "cote": { "left": 7, "rigth": 21, "top": 15, "bottom": null },
  //   "possition": { "x": 14, "y": 14 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 15,
  //   "cote": { "left": 8, "rigth": 22, "top": 16, "bottom": 14 },
  //   "possition": { "x": 15, "y": 15 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 16,
  //   "cote": { "left": 9, "rigth": 23, "top": 17, "bottom": 15 },
  //   "possition": { "x": 16, "y": 16 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 17,
  //   "cote": { "left": 10, "rigth": 24, "top": 18, "bottom": 16 },
  //   "possition": { "x": 17, "y": 17 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 18,
  //   "cote": { "left": 11, "rigth": 25, "top": 19, "bottom": 17 },
  //   "possition": { "x": 18, "y": 18 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 19,
  //   "cote": { "left": 12, "rigth": 26, "top": 20, "bottom": 18 },
  //   "possition": { "x": 19, "y": 19 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 20,
  //   "cote": { "left": 13, "rigth": 27, "top": null, "bottom": 19 },
  //   "possition": { "x": 20, "y": 20 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 21,
  //   "cote": { "left": 14, "rigth": 28, "top": 22, "bottom": null },
  //   "possition": { "x": 21, "y": 21 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 22,
  //   "cote": { "left": 15, "rigth": 29, "top": 23, "bottom": 21 },
  //   "possition": { "x": 22, "y": 22 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 23,
  //   "cote": { "left": 16, "rigth": 30, "top": 24, "bottom": 22 },
  //   "possition": { "x": 23, "y": 23 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 24,
  //   "cote": { "left": 17, "rigth": 31, "top": 25, "bottom": 23 },
  //   "possition": { "x": 24, "y": 24 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 25,
  //   "cote": { "left": 18, "rigth": 32, "top": 26, "bottom": 24 },
  //   "possition": { "x": 25, "y": 25 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 26,
  //   "cote": { "left": 19, "rigth": 33, "top": 27, "bottom": 25 },
  //   "possition": { "x": 26, "y": 26 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 27,
  //   "cote": { "left": 20, "rigth": 34, "top": null, "bottom": 26 },
  //   "possition": { "x": 27, "y": 27 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 28,
  //   "cote": { "left": 21, "rigth": 35, "top": 29, "bottom": null },
  //   "possition": { "x": 28, "y": 28 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 29,
  //   "cote": { "left": 22, "rigth": 36, "top": 30, "bottom": 28 },
  //   "possition": { "x": 29, "y": 29 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 30,
  //   "cote": { "left": 23, "rigth": 37, "top": 31, "bottom": 29 },
  //   "possition": { "x": 30, "y": 30 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 31,
  //   "cote": { "left": 24, "rigth": 38, "top": 32, "bottom": 30 },
  //   "possition": { "x": 31, "y": 31 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 32,
  //   "cote": { "left": 25, "rigth": 39, "top": 33, "bottom": 31 },
  //   "possition": { "x": 32, "y": 32 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 33,
  //   "cote": { "left": 26, "rigth": 40, "top": 34, "bottom": 32 },
  //   "possition": { "x": 33, "y": 33 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 34,
  //   "cote": { "left": 27, "rigth": 41, "top": null, "bottom": 33 },
  //   "possition": { "x": 34, "y": 34 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 35,
  //   "cote": { "left": 28, "rigth": 42, "top": 36, "bottom": null },
  //   "possition": { "x": 35, "y": 35 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 36,
  //   "cote": { "left": 29, "rigth": 43, "top": 37, "bottom": 35 },
  //   "possition": { "x": 36, "y": 36 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 37,
  //   "cote": { "left": 30, "rigth": 44, "top": 38, "bottom": 36 },
  //   "possition": { "x": 37, "y": 37 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 38,
  //   "cote": { "left": 31, "rigth": 45, "top": 39, "bottom": 37 },
  //   "possition": { "x": 38, "y": 38 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 39,
  //   "cote": { "left": 32, "rigth": 46, "top": 40, "bottom": 38 },
  //   "possition": { "x": 39, "y": 39 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 40,
  //   "cote": { "left": 33, "rigth": 47, "top": 41, "bottom": 39 },
  //   "possition": { "x": 40, "y": 40 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 41,
  //   "cote": { "left": 34, "rigth": 48, "top": null, "bottom": 40 },
  //   "possition": { "x": 41, "y": 41 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 42,
  //   "cote": { "left": 35, "rigth": 49, "top": 43, "bottom": null },
  //   "possition": { "x": 42, "y": 42 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 43,
  //   "cote": { "left": 36, "rigth": 50, "top": 44, "bottom": 42 },
  //   "possition": { "x": 43, "y": 43 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 44,
  //   "cote": { "left": 37, "rigth": 51, "top": 45, "bottom": 43 },
  //   "possition": { "x": 44, "y": 44 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 45,
  //   "cote": { "left": 38, "rigth": 52, "top": 46, "bottom": 44 },
  //   "possition": { "x": 45, "y": 45 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 46,
  //   "cote": { "left": 39, "rigth": 53, "top": 47, "bottom": 45 },
  //   "possition": { "x": 46, "y": 46 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 47,
  //   "cote": { "left": 40, "rigth": 54, "top": 48, "bottom": 46 },
  //   "possition": { "x": 47, "y": 47 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 48,
  //   "cote": { "left": 41, "rigth": 55, "top": null, "bottom": 47 },
  //   "possition": { "x": 48, "y": 48 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 49,
  //   "cote": { "left": 42, "rigth": 56, "top": 50, "bottom": null },
  //   "possition": { "x": 49, "y": 49 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 50,
  //   "cote": { "left": 43, "rigth": 57, "top": 51, "bottom": 49 },
  //   "possition": { "x": 50, "y": 50 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 51,
  //   "cote": { "left": 44, "rigth": 58, "top": 52, "bottom": 50 },
  //   "possition": { "x": 51, "y": 51 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 52,
  //   "cote": { "left": 45, "rigth": 59, "top": 53, "bottom": 51 },
  //   "possition": { "x": 52, "y": 52 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 53,
  //   "cote": { "left": 46, "rigth": 60, "top": 54, "bottom": 52 },
  //   "possition": { "x": 53, "y": 53 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 54,
  //   "cote": { "left": 47, "rigth": 61, "top": 55, "bottom": 53 },
  //   "possition": { "x": 54, "y": 54 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 55,
  //   "cote": { "left": 48, "rigth": 62, "top": null, "bottom": 54 },
  //   "possition": { "x": 55, "y": 55 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 56,
  //   "cote": { "left": 49, "rigth": 63, "top": 57, "bottom": null },
  //   "possition": { "x": 56, "y": 56 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 57,
  //   "cote": { "left": 50, "rigth": 64, "top": 58, "bottom": 56 },
  //   "possition": { "x": 57, "y": 57 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 58,
  //   "cote": { "left": 51, "rigth": 65, "top": 59, "bottom": 57 },
  //   "possition": { "x": 58, "y": 58 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 59,
  //   "cote": { "left": 52, "rigth": 66, "top": 60, "bottom": 58 },
  //   "possition": { "x": 59, "y": 59 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 60,
  //   "cote": { "left": 53, "rigth": 67, "top": 61, "bottom": 59 },
  //   "possition": { "x": 60, "y": 60 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 61,
  //   "cote": { "left": 54, "rigth": 68, "top": 62, "bottom": 60 },
  //   "possition": { "x": 61, "y": 61 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 62,
  //   "cote": { "left": 55, "rigth": 69, "top": null, "bottom": 61 },
  //   "possition": { "x": 62, "y": 62 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 63,
  //   "cote": { "left": 56, "rigth": null, "top": 64, "bottom": null },
  //   "possition": { "x": 63, "y": 63 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 64,
  //   "cote": { "left": 57, "rigth": null, "top": 65, "bottom": 63 },
  //   "possition": { "x": 64, "y": 64 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 65,
  //   "cote": { "left": 58, "rigth": null, "top": 66, "bottom": 64 },
  //   "possition": { "x": 65, "y": 65 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 66,
  //   "cote": { "left": 59, "rigth": null, "top": 67, "bottom": 65 },
  //   "possition": { "x": 66, "y": 66 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 67,
  //   "cote": { "left": 60, "rigth": null, "top": 68, "bottom": 66 },
  //   "possition": { "x": 67, "y": 67 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 68,
  //   "cote": { "left": 61, "rigth": null, "top": 69, "bottom": 67 },
  //   "possition": { "x": 68, "y": 68 },
  //   "path": "centre.glb",
  //   "angle": 1
  // },
  // {
  //   "id": 69,
  //   "cote": { "left": 62, "rigth": null, "top": null, "bottom": 68 },
  //   "possition": { "x": 69, "y": 69 },
  //   "path": "centre.glb",
  //   "angle": 1
  // } */