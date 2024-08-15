#!/usr/bin/env python3
"""Module for Complex types - string and int/float to tuple"""


from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Create a tuple using string and numbers"""
    result: Tuple[str, float] = (k, v**2)
    return result
