#!/usr/bin/env python3
"""async generator"""

import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """async generator"""

    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
