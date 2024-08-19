#!/usr/bin/env python3
"""Measure runtime"""

import asyncio
import time


async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """Measure runtime"""

    result = 0
    start_time = time.time()
    tasks = [async_comprehension() for _ in range(4)]
    result = await asyncio.gather(*tasks)
    end = time.time()
    result = end - start_time
    return result
