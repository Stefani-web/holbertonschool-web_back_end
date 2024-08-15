#!/usr/bin/env python3
"""Measure the runtime"""
import asyncio
import random
import time
from typing import List


wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int = 10, max_delay: int = 10) -> float:
    """Measure the runtime"""
    start: float = time.time()
    asyncio.run(wait_n(n, max_delay))
    end: float = time.time()
    return (end - start) / n
