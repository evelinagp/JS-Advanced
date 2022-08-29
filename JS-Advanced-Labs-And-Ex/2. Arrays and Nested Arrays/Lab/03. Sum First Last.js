function firstLast(strings) {
    const first = Number(strings.shift());
    const last = Number(strings.pop());

    return first + last;
}