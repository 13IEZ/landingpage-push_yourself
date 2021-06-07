'use strict';

class Tabs {
    constructor(pictureOne, pictureTwo) {
        this.pictureOne = pictureOne;
        this.pictureTwo = pictureTwo;
        this.classActive = 'active-bar';
        this.arrOfBtn = document.querySelectorAll('.bar-item');
        this.colWrapper = document.querySelector('.col-wrapper');
    }

    changeBGBar(id) {
        this.arrOfBtn.forEach(item => {
            item.classList.remove(this.classActive);
        });
        this.arrOfBtn[id - 1].classList.add(this.classActive);
    }

    changeTab(id) {
        console.log(this.colWrapper);
        if (parseInt(id) === 1) {
            this.colWrapper.innerHTML = `
            <div class="col-lg-4">
                <a href="#" class="tab-link"><img src=${this.pictureTwo} alt="picture" class="tab-pic">design listing one</a> 
            </div>
            <div class="col-lg-4">
                <a href="#" class="tab-link"><img src=${this.pictureTwo} alt="picture" class="tab-pic">design listing one</a> 
            </div>
            <div class="col-lg-4">
                <a href="#" class="tab-link"><img src=${this.pictureTwo} alt="picture" class="tab-pic">design listing one</a> 
            </div>
            `;
        } else if (parseInt(id) === 2) {
            this.colWrapper.innerHTML = `
            <div class="col-lg-4">
                <a href="#" class="tab-link"><img src=${this.pictureOne} alt="picture" class="tab-pic">design listing one</a> 
            </div>
            <div class="col-lg-4">
                <a href="#" class="tab-link"><img src=${this.pictureTwo} alt="picture" class="tab-pic">design listing one</a> 
            </div>
            <div class="col-lg-4">
                <a href="#" class="tab-link"><img src=${this.pictureTwo} alt="picture" class="tab-pic">design listing one</a> 
            </div>
            `;
        } else if (parseInt(id) === 3) {
            this.colWrapper.innerHTML = `
            <div class="col-lg-4">
                <a href="#" class="tab-link"><img src=${this.pictureTwo} alt="picture" class="tab-pic">design listing one</a> 
            </div>
            <div class="col-lg-4">
                <a href="#" class="tab-link"><img src=${this.pictureOne} alt="picture" class="tab-pic">design listing one</a> 
            </div>
            <div class="col-lg-4">
                <a href="#" class="tab-link"><img src=${this.pictureTwo} alt="picture" class="tab-pic">design listing one</a> 
            </div>
            `;
        } else if (parseInt(id) === 4) {
            this.colWrapper.innerHTML = `
            <div class="col-lg-4">
                <a href="#" class="tab-link"><img src=${this.pictureTwo} alt="picture" class="tab-pic">design listing one</a> 
            </div>
            <div class="col-lg-4">
                <a href="#" class="tab-link"><img src=${this.pictureTwo} alt="picture" class="tab-pic">design listing one</a> 
            </div>
            <div class="col-lg-4">
                <a href="#" class="tab-link"><img src=${this.pictureOne} alt="picture" class="tab-pic">design listing one</a> 
            </div>
            `;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {

    const content = new Tabs('http://via.placeholder.com/380x204', 'img/tab-pic.jpg');

    content.arrOfBtn.forEach(item => {
        item.addEventListener('click', (e) => {
            const id = e.target.attributes.id.value;
            content.changeBGBar(id);
            content.changeTab(id);
        });
    });
});

