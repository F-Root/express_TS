// const express = require('express');
// const dotenv = require('dotenv');
// babel을 사용해야 node.js에서 import/export 사용 가능
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { app } from './src/app';
dotenv.config();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`타입스크립트로 서버실행중입니다`);
});
