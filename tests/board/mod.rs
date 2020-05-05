use wasm_bindgen_test::*;
use wasm_hex::board::*;

#[wasm_bindgen_test]
pub fn test_new_board() {
    let board = Board::new(11);

    let expected_cells_count = &121usize;

    assert_eq!(&board.get_cells().len(), expected_cells_count);
}

#[wasm_bindgen_test]
/// Basic situation : Player 1 plays, it's the turn of Player 2.
pub fn test_the_next_player_is_find() {
    let mut board = Board::new(3);
    board = board.update_cell(1, Player::First);

    let expected_player = Player::Second;

    assert_eq!(board.get_player(), expected_player);
}

#[wasm_bindgen_test]
/// Basic situation : Player 2 plays, it's the turn of Player 1.
/// Even grid
pub fn test_the_next_player_is_find_for_an_even_grid() {
    let mut board = Board::new(4);
    board = board.update_cell(1, Player::First);
    board = board.update_cell(2, Player::Second);

    let expected_player = Player::First;

    assert_eq!(board.get_player(), expected_player);
}

#[wasm_bindgen_test]
pub fn test_a_random_move_is_applied() {
    let mut board = Board::new(3);
    board = board.update_cell(0, Player::First);
    board = board.update_cell(1, Player::Second);
    board = board.update_cell(2, Player::First);
    board = board.update_cell(3, Player::Second);
    board = board.update_cell(4, Player::First);
    board = board.update_cell(5, Player::Second);
    board = board.update_cell(6, Player::First);
    board = board.update_cell(7, Player::Second);

    let expected_cells = [
        Cell::White,
        Cell::Black,
        Cell::White,
        Cell::Black,
        Cell::White,
        Cell::Black,
        Cell::White,
        Cell::Black,
        Cell::White, // This Cell is the one who needs to be verified.
    ];

    assert_eq!(board.play_as(Player::First).get_cells(), expected_cells);
}
