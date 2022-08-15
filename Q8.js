const order = {
    cart: [
        { id: 1, name: "ao dai", amount: 5, price: 100000 },
        { id: 2, name: "ao coc", amount: 2, price: 200000 },
        { id: 3, name: "quan dai", amount: 3, price: 150000 },
        { id: 4, name: "quan coc", amount: 4, price: 130000 },
    ],
    total_money: 0,
    total_amount: 0,
};
const result = order.cart.reduce((acc, cur) => {
    return {
        total_money: acc.total_money + cur.price * cur.amount,
        total_amount: acc.total_amount + cur.amount
    }
}, { total_money: 0, total_amount: 0 })
console.log(result)