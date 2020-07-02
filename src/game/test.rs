#[cfg(test)]
mod test {

    use crate::board::Board;
    use crate::game::{get_neighbors, Coord, Player};

    #[test]
    fn can_get_neighbors() {
        let mut board = Board::new(11);
        let coord = Coord::new(1, 1);
        let player = Player::First;

        board = board.update_cell(1, Player::First);

        get_neighbors(board, coord, player);

        assert_eq!(2 + 2, 4);
    }
}
