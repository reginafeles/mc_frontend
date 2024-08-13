class Card {
    constructor(number, holder, month, year, cvv, balance) {
       this.number = number
       this.holder = holder
       this.month = month
       this.year = year
       this.cvv = cvv
       this.balance = balance
    }
    toHtml() {
        return `<div class='card-small'>
                    <img src='https://static.tildacdn.com/tild6135-6639-4439-a630-313761323361/Group_10537.svg'>
                    <p>${this.number}</p>
                    <p>${this.holder.name} ${this.holder.surname}</p>
                    <p>${this.month}/${this.year}</p>
                    <div class='cvv'>${this.cvv}</div>
                </div>`
    }
}
class User {
   constructor(name, surname, phone, email, gender) {
       this.name = name
       this.surname = surname
       this.phone = phone
       this.email = email
       this.gender = gender
   }
} 
let number_field = document.querySelector('.card-number')
let card_month_field = document.querySelector('.card-expire-month')
let card_year_field = document.querySelector('.card-expire-year')
let holder_name_field = document.querySelector('.card-holder-name')
let holder_surname_field = document.querySelector('.card-holder-surname')
let holder_phone_field = document.querySelector('.card-holder-phone')
let holder_email_field = document.querySelector('.card-holder-email')
let holder_gender_field = document.querySelector('.card-holder-gender')
let card_list_field = document.querySelector('.cards')
let create_card_btn = document.querySelector('.create-card-btn')
let cards = []
create_card_btn.addEventListener('click', function() {
    if (holder_name_field.value == '' ||
        holder_surname_field.value == '' ||
        holder_phone_field.value == '' ||
        holder_email_field.value == '' ||
        holder_gender_field.value == '') {
           alert('Убедитесь в том, что все поля заполнены!')
    } else {
        let holder = new User(
            holder_name_field.value,
            holder_surname_field.value,
            holder_phone_field.value,
            holder_email_field.value,
            holder_gender_field.value
            )
        let card = new Card(
            number_field.value,
            holder,
            card_month_field.value,
            card_year_field.value,
            Math.round(Math.random() * 899 + 100),
            1000
        )
        cards.push(card)
        card_list_field.innerHTML += card.toHtml()
    }
})
function getCardByNumber(number) {
   for (let i = 0; i < cards.length; i++) {
       if (cards[i].number == number) {
           return cards[i]
       }
   }
}
let get_info_btn = document.querySelector('.get-card-info-btn')
let get_info_number_field = document.querySelector('.get-card-info-group input')
get_info_btn.addEventListener('click', function() {
   let number = get_info_number_field.value
   let info_card = getCardByNumber(number)
   alert(`Владелец: ${info_card.holder.name} ${info_card.holder.surname}
Номер телефона: ${info_card.holder.phone}
Почта: ${info_card.holder.email}
Пол: ${info_card.holder.gender}`)
})
