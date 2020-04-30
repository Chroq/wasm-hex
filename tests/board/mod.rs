use wasm_hex::board::Board;

use wasm_bindgen_test::*;

#[wasm_bindgen_test]
pub fn test_new_board() {
    let board = Board::new(11);

    let expected_cells_count = &121usize;

    assert_eq!(&board.get_cells().len(), expected_cells_count);
}
