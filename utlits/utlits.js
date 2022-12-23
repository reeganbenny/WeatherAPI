const express = require("express");

// import fetch from "node-fetch";
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const API_KEY = "a747373fce10492987c190459222212";
const BASE_URL = "https://api.weatherapi.com/v1";

exports.getWeather = async (city) => {
  const url = `${BASE_URL}/current.json?key=${API_KEY}&q=${city}`;
  console.log(url);
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

exports.getForecast = async (city, days) => {
  const url = `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}&aqi=no&alerts=no`;
  console.log(url);
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
