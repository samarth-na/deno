// highest common divisor
export default function hcd(n1: number, n2: number) {
    let index: number;
    if (n1 < n2) {
        index = n1;
    } else {
        index = n2;
    }
    // console.log(n1, n2, index);

    for (index; index >= 0; index--) {
        // console.log(index);
        if (n1 % index == 0) {
            if (n2 % index == 0) {
                console.log(index);
                return index;
            }
        }
    }
    return 1;
}
hcd(8, 4);
