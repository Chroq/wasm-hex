use wasm_bindgen::prelude::*;

#[wasm_bindgen]
#[repr(u8)]
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub enum Cell {
    Empty = 0,
    White = 1,
    Black = 2,
}

#[wasm_bindgen]
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
    pub fn update_cell(&mut self, index: usize, new_cell: Cell) -> Board {
        let mut cells = self.cells.clone();

        cells[index] = new_cell;

        Board { cells }
    }
}

impl Board {
    pub fn get_cells(&self) -> &[Cell] {
        &self.cells
    }
}
