'use strict';

const APIKey = '6e9fd6b89d81257b48c52036ea32a405';
let tableBody = document.getElementById('table-body');
let getButton = document.getElementById('get-button');

getButton.onclick = () => {
	fetch(
		`http://api.mediastack.com/v1/news?access_key=${APIKey}&languages=es&date=2020-12-31,2021-05-31`
	)
		.then((data) => data.json())
		.then((data) =>
			data.data.map((news) => {
				if (news.author) {
					let newsDate = new Date(news.published_at);
					let year = newsDate.getFullYear();
					let month = newsDate.getMonth() + 1;
					let date = newsDate.getDate();
					let formattedDate = `${date}/${month}/${year}`;

					tableBody.innerHTML += `<tr class="table__row">
                                                <td class="table__cell"> ${news.author} </th>
                                                <td class="table__cell"> ${news.title} </td>
                                                <td class="table__cell"> ${news.description} </td>
                                                <td class="table__cell">
                                                    <a href="${news.url}"> ${news.url} </a>
                                                </td>
                                                <td class="table__cell"> ${formattedDate} </td>
                                            </tr>`;
				}
			})
		);
};
