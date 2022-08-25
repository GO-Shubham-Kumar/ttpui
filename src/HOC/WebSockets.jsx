import React, { useState, useEffect } from 'react';
import { io } from "socket.io-client";

const webSocket = new WebSocket('wss://192.168.9.159/wssresui');

export default webSocket