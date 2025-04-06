function formatDate(inputDate) {
    const parts = inputDate.split('.')
    if (parts.length !== 3) return "Неверный формат даты"

    const day = parseInt(parts[0], 10)
    const month = parseInt(parts[1], 10) - 1
    let year = parseInt(parts[2], 10)

    year = year < 100 ? (year < 25 ? 2000 + year : 1900 + year) : year

    const date = new Date(year, month, day)
    if (isNaN(date.getTime())) return "Неверная дата"

    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ]

    const formattedDay = date.getDate()
    const formattedMonth = months[date.getMonth()]
    const formattedYear = date.getFullYear()

    return `${formattedDay} ${formattedMonth} ${formattedYear} г.`
}

function calculateReadingTime(text) {
    const wordsPerMinute = 200
    const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length

    const minutes = wordCount / wordsPerMinute

    if (minutes < 1) {
        return "< 1 мин."
    } else if (minutes < 60) {
        return `${Math.round(minutes)} мин.`
    }

    return `${Math.floor(minutes / 60)} час`
}

const AddContentAfterTitleHTML = ({ author, date, author_link, time_read }) => {
    return (`
            <div class="post-after-title">
                <div class="post-after-title__author">
                    <a href="/users/${author_link}">
                        ${author}
                    </a>
                </div>
                <div class="post-after-title__right">
                    <div class="post-after-title__right_time-read">
                        ${time_read}
                    </div>
                    <div class="post-after-title__right_date">
                        ${formatDate(date)}
                    </div>
                </div>
            </div>
        `)
}

function AddContentAfterTitle() {
    const title = document.querySelector('h1')
    if (!title) return

    const fullPost = document.getElementById('post--main')
    if (!fullPost) return

    const urlSplit = String((new URL(window.location)).pathname).split('/')
    const url = urlSplit[urlSplit.length - 2]

    $.getJSON('/js/posts.json', function (pages) {
        pages.forEach(post => {
            if (post.link === `https://news.dybka.ru/${url}`) {
                const html = AddContentAfterTitleHTML({
                    author: post.author,
                    date: post.date_publish,
                    author_link: post.author_link,
                    time_read: calculateReadingTime(fullPost.outerHTML),
                })

                title.insertAdjacentHTML('afterend', html)
            }
        })
    })
}

AddContentAfterTitle()
