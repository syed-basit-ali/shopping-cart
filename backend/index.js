"use strict";
require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const corsOptions = require("./src/config/corsOptions");
const { logger } = require("./src/middleware/logEvents");
