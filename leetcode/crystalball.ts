function genrateList(): number[] {
    const random0 = Math.floor(Math.random() * 100);
    const random1 = Math.floor(Math.random() * 100);

    let list = [0];

    for (let index = 0; index < random0; index++) {
        list.push(0);
    }
    // console.log(list);
    for (let index = 0; index < random1; index++) {
        list.push(1);
    }

    return list;
}

export default function crystalBalls(nums: number[]): number {
    const jump = Math.floor(Math.sqrt(nums.length));

    let i = jump;

    for (; i < nums.length; i += jump) {
        if (nums[i] === 1) {
            break;
        }
    }
    i -= jump;

    for (let j = 0; j < jump && i < nums.length; j++, i++) {
        if (nums[i]) {
            console.log(i);
            return i;
        }
    }

    return -1;
}

crystalBalls(genrateList());
