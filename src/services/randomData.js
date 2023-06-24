const random = (data) => data.sort(() => Math.random() - 0.5).slice(0, 6);

const randomData = (data, ids) => {
    const dataArr = [];

    for (let i = 0; i < data.length; i++) {
        const isIncludesId = ids.includes(data[i].id);
        if (isIncludesId) continue;
        dataArr.push(data[i]);
    }

    if (dataArr.length === 0) return random(data);

    if (dataArr.length < 6) {
        for (let i = 0; i < data.length; i++) {
            if (dataArr.length === 6) break;

            const item = data[i];
            let isItemAdded = false;
            for (let j = 0; j < dataArr.length; j++) {
                if (dataArr[j].id === item.id) isItemAdded = true;
            }
            if (!isItemAdded) dataArr.push(item);
        }

        return random(dataArr);
    } else {
        return random(dataArr);
    }
};

export default randomData;
