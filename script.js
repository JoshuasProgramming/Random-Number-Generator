/** 
 * Random Number Generator JavaScript File
 * author(Joshua Thomas)
 * date(13.01.2022)
 * version:1.0
 */

const text = document.getElementById('text');
const generate_btn = document.getElementById('generate_btn');

generate_btn.addEventListener("click", (e)=>{
    let rand = Math.floor(Math.random() * 10001);
    
    if((rand > 0) && (rand < 100)){
        text.innerText = rand;
        text.style.color = "red";
    }
    
    if((rand > 100) && (rand < 1000)){
        text.innerText = rand;
        text.style.color = "orange";
    }
    
    if((rand > 1000) && (rand < 10000)){
        text.innerText = rand;
        text.style.color = "green";
    }
});

const key1_btn = document.getElementById('key1_btn').addEventListener("click", (e)=>{
    text.innerText = "1 - 99";
    text.style.color = "red";
});

const key2_btn = document.getElementById('key2_btn').addEventListener("click", (e)=>{
    text.innerText = "100 - 999";
    text.style.color = "orange";
});

const key3_btn = document.getElementById('key3_btn').addEventListener("click", (e)=>{
    text.innerText = "1000 - 9999";
    text.style.color = "green";
});