import type { TAttackBox, IVector2D, Fighter } from './classes';

export function rectangularCollision({
	rectangle1,
	rectangle2
}: {
	rectangle1: {
		attackBox: TAttackBox;
		position: IVector2D;
		width: number;
		height: number;
	};
	rectangle2: {
		attackBox: TAttackBox;
		position: IVector2D;
		width: number;
		height: number;
	};
}) {
	return (
		rectangle1.attackBox.position.x + rectangle1.attackBox.width >=
			rectangle2.position.x &&
		rectangle1.attackBox.position.x <=
			rectangle2.position.x + rectangle2.width &&
		rectangle1.attackBox.position.y + rectangle1.attackBox.height >=
			rectangle2.position.y &&
		rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
	);
}

const displayTextElem = document.querySelector('#displayText');
const timerElem = document.querySelector('#timer');

export function determineWinner({
	player,
	enemy,
	timerId,
	displayTextElem
}: {
	player: Fighter;
	enemy: Fighter;
	timerId: number;
	displayTextElem: HTMLElement;
}) {
	clearTimeout(timerId);
	displayTextElem.style.display = 'flex';
	if (player.health === enemy.health) {
		displayTextElem.innerHTML = 'Tie';
	} else if (player.health > enemy.health) {
		displayTextElem.innerHTML = 'Player 1 Wins';
	} else if (player.health < enemy.health) {
		displayTextElem.innerHTML = 'Player 2 Wins';
	}
}

let timer = 60;
let timerId;
export function decreaseTimer({
	displayTextElem,
	enemy,
	player,
	timerElem,
	timerId
}: {
	player: Fighter;
	enemy: Fighter;
	timerId: number;
	displayTextElem: HTMLElement;
	timerElem: HTMLElement;
}) {
	if (timer > 0) {
		timerId = setTimeout(decreaseTimer, 1000);
		timer--;
		timerElem.innerHTML = timer.toString();
	}

	if (timer === 0) {
		determineWinner({ displayTextElem, player, enemy, timerId });
	}
}
