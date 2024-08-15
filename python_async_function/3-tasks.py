#!/usr/bin/env python3
"""Measure the runtime"""
import asyncio
import random
import time
from typing import List


wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int = 10) -> asyncio.Task:
    """Measure the runtime"""
    return asyncio.create_task(wait_random(max_delay))
