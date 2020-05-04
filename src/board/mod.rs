use wasm_bindgen::prelude::*;

#[wasm_bindgen]
#[repr(u8)]
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub enum Player {
    First = 1,
    Second = 2,
}

#[wasm_bindgen]
#[repr(u8)]
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub enum Cell {
    Empty = 0,
    White = 1,
    Black = 2,
}

#[wasm_bindgen]
#[derive(Debug)]
pub struct Board {
    cells: Vec<Cell>,
}

#[wasm_bindgen]
impl Board {
    pub fn new(size: u8) -> Board {
        let cells = (0..size * size).map(|_i| Cell::Empty).collect();

        Board { cells }
    }

    pub fn cells(&self) -> *const Cell {
        self.cells.as_ptr()
    }
    pub fn update_cell(&mut self, index: usize, player: Player) -> Board {
        let mut cells = self.cells.clone();

        cells[index] = if player == Player::First {
            Cell::White
        } else {
            Cell::Black
        };

        Board { cells }
    }

    pub fn get_player(&self) -> Player {
        let is_even = self.cells.len() % 2 == 0;

        let empty_cells_count = self
            .cells
            .iter()
            .filter(|&&cell| cell == Cell::Empty)
            .count();
        return if is_even && empty_cells_count % 2 == 0 {
            Player::First
        } else if !is_even && empty_cells_count % 2 == 1 {
            Player::First
        } else {
            Player::Second
        };
    }
}

impl Board {
    pub fn get_cells(&self) -> &[Cell] {
        &self.cells
    }
}
