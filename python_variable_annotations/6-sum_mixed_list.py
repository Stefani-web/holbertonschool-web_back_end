#!/usr/bin/env python3
"""Module for Complex types - mixed list"""


from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Returns the sum of the list of numbers"""
    return sum(mxd_lst)
