#!/usr/bin/env python3
"""Module for Let's duck type an iterable object"""


from typing import Iterable, List, Sequence, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """return elements and their lengths"""
    return [(i, len(i)) for i in lst]
