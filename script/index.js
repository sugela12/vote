import { myFetch } from './fetchRequest.js';

document.addEventListener('DOMContentLoaded', async (event) => {
    await getVoteList();
});

// 获取投票列表
const getVoteList = () => {
    myFetch({ url: 'vote/list', method: 'GET' })
        .then((res) => {
            res.forEach(item => {
                const voteItemHTML = `
                    <div class="vote-item" data-id="${item.id}">
                        <img src="${item.avatar}" class="avatar">
                        <div class="vote-info">
                            <div class="name">${item.vote_name}</div>
                            <div class="voteId">id:${item.id}</div>
                            <div class="voteNum">${item.vote_num}</div>
                        </div>
                        <button class="vote-btn">投TA一票</button>
                    </div>
                `;
                // 使用 insertAdjacentHTML 添加新的投票项
                const voteList = document.getElementById('vote-list');
                voteList.insertAdjacentHTML('beforeend', voteItemHTML);
                // 获取刚刚添加的按钮元素，并添加点击事件监听器
                const btn = voteList.lastElementChild.querySelector('.vote-btn');
                btn.addEventListener('click', (event) => {
                    handleVote(item.id);
                });
            });
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

// 处理投票逻辑
const handleVote = (voteId) => {
    console.log(`Voting for id: ${voteId}`);
    myFetch({ url: 'vote/vote', method: 'POST', data: { id: voteId } })
        .then((res) => {
            console.log('Vote success:', res);
            // 查找对应的投票项元素
            const voteItem = document.querySelector(`.vote-item[data-id="${voteId}"]`);
            if (voteItem) {
                // 获取当前的投票数元素并更新其文本内容
                const voteNumElement = voteItem.querySelector('.voteNum');
                const currentVoteNum = parseInt(voteNumElement.textContent, 10);
                voteNumElement.textContent = currentVoteNum + 1;
            }
        })
        .catch((error) => {
            console.error('Vote failed:', error);
        });
}
