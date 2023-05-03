const obj = {
    foo: 'abc',
    bar: 781,
    baz: 1337n
}

const serializer = (data) => JSON.stringify(data, (_, v) => typeof v === 'bigint' ? v.toString() : v);
const parser = (json) =>  JSON.parse(json, (_, v) => typeof v === 'string' && /\d+/g.test(v) ? BigInt(v) : v );

const serialized = serializer(obj);
const parsed = parser(serialized);