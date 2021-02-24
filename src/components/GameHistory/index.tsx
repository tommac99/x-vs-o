import { FC } from "react";
import { Container, Text } from "./styles";

interface IScoreBoardProps {
  history: any[];
  jumpTo: (move: number) => void;
  gameHasStarted: boolean;
}

export const GameHistory: FC<IScoreBoardProps> = ({
  history,
  jumpTo,
  gameHasStarted,
}) => {
  const handleJumpTo = (move: number) => () => {
    jumpTo(move);
  };

  const renderMoves = () => {
    return history.map((step: number[], move: number) => {
      if (move === 0) return null;
      return (
        <Text key={move} onClick={handleJumpTo(move)}>
          {`Go to move ${move}`}
        </Text>
      );
    });
  };

  return (
    <Container style={{ display: gameHasStarted ? "block" : "none" }}>
      {renderMoves()}
    </Container>
  );
};
