type Mydata<data> = {
    data: any;

    string: data;
};

type ex1 = Mydata<{
    name: string;
}>;

let set = new Set<number>();

set.add(1);
