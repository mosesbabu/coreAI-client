const initState = {
    data: {
        labels: ['Oct 10', 'Oct 11', 'Oct 12', 'Oct 13', 'Oct 14', 'Oct 15'],
        datasets: [{
            label: 'Currency $',
            data: [1200, 1900, 300, 5000, 20, 300],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    }
}

export default (state = initState, action) => {
    switch(action.type){
        default:
            return state;
    }
}