pub mod test;

/* use pathfinding::prelude::dijkstra; */
use std::collections::HashMap;
/* use std::convert::TryFrom; */
use std::fmt;
use wasm_bindgen::prelude::*;

use crate::board::{Board, Cell, Player};
/* use crate::log; */

/* const DISCARD_DISTANCE: u8 = 0;
const OWNED_DISTANCE: u8 = 1; */

#[wasm_bindgen]
impl Coord {
    pub fn new(x: usize, y: usize) -> Coord {
        Coord { x, y }
    }
}

/* const DIRECTIONS: [(usize, usize); 6] = [(0, -1), (1, -1), (1, 0), (-1, 0), (-1, 1), (0, 1)]; */

#[wasm_bindgen]
#[derive(Clone, Debug, PartialEq, Eq, Hash)]
pub struct Coord {
    x: usize,
    y: usize,
}

impl fmt::Display for Coord {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "(x:{}, y: {})", self.x, self.y)
    }
}

/* #[wasm_bindgen]
pub fn get_successors() {

} */

/* pub fn get_neighbors(board: Board, coord: (u8, u8), player: Player) -> <(u8, u8, u8)> { */
#[wasm_bindgen]
pub fn get_neighbors(board: Board, coord: Coord, player: Player) {
    let size = *board.get_size();

    let matrix: HashMap<Coord, Cell> = board
        .get_cells()
        .iter()
        .enumerate()
        .map(|(index, &cell)| {
            let x = index / size;
            let y = index % size;

            (Coord::new(x, y), cell)
        })
        .collect();

    for (key, value) in &matrix {
        println!("{} : {}", key, value);
    }

    /*
       for (i, x) in board.get_cells().iter().enumerate() {

          }
    */
    /* DIRECTIONS.iter().map(|direction| {
        let xNeighbor = coord.x + direction.0;
        let yNeighbor = coord.y + direction.1;

        /*         let neighbors = board
        .cells()
        .iter()
        .filter(|&&cell| log!("Test neigbors : {}", cell)); */

        /* log!("Test neigbors : {}", neighbors); */
    }); */
}
