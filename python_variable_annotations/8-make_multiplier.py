#!/usr/bin/env python3
"""Module for Complex types - functions"""


from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """return a function"""
    def make_multiplier_child(f: float) -> float:
        """the function"""
        return f * multiplier
    return make_multiplier_child
