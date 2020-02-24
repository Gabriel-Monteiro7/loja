import { Router } from "express";

const axios = require("axios");
let cheerio = require("cheerio");
// let data = [];
// let iconv = require("iconv-lite");
// const puppeteer = require("puppeteer");
const routes = new Router();

routes.get("/", (req, res) => {
  axios.get("https://www.tricae.com.br/brinquedos/?page=1").then(response => {
    let body = response.data;
    let $ = cheerio.load(body, { decodeEntities: false });
    let value = [];
    $(".product-box").each((indice, element) => {
      value.push({
        img: $(element)
          .find("img")
          .attr("data-original"),
        titulo: $(element)
          .find(".product-box-title")
          .text(),
        labelMarca: $(element)
          .find(".product-box-brand")
          .text(),
        preco: parseFloat($(element)
          .find(".product-box-price-from")
          .text().slice(3).replace('.','').replace(',','.')),
        precoFormatado:$(element)
        .find(".product-box-price-from")
        .text()
      });
    });
    value.shift()
    res.json(value)
  });
  // let scrape = async () => {
  //   const browser = await puppeteer.launch();

  //   const page = await browser.newPage();
  //   page.setDefaultNavigationTimeout(10000000);
  //   await page.goto("https://www.tricae.com.br/brinquedos");
  //   const result = await page.evaluate(() => {
  //     let produtos=[]

  //     document
  //       .querySelectorAll(".product-box")
  //       .forEach(produto => {produtos.push({
  //         labelMarca:(produto.getElementsByClassName('product-box-brand')[0]),
  //         // preco:produto.getElementsByClassName('x-shelf__old-price')[0].innerText,
  //         label:(produto.getElementsByClassName('product-box-title').innerText),
  //         preco:(produto.getElementsByClassName('product-box-price-from').innerText),
  //         img:produto.getElementsByTagName('img')[0].getAttribute('data-original')
  //       });console.log(produto)}
  //       );
  //     return produtos;
  //   });

  //   browser.close();
  //   return result;
  // };
  // scrape().then(value => {
  //   res.json(value)
  // });
});
export default routes;
