# -*- coding: utf-8 -*-
"""Shared metadata for Excel scene tool codegen (comments: slug list + helpers)."""

from __future__ import annotations

LANGS = ["en", "zh", "es", "ar", "pt", "id", "fr", "ja", "ru", "de"]


def kebab_to_camel(slug: str) -> str:
    """Convert kebab-case slug to camelCase page filename stem."""
    parts = slug.split("-")
    return parts[0] + "".join(p[:1].upper() + p[1:] for p in parts[1:])


def prefix_for(slug: str) -> str:
    """Build catalog faqPrefix from slug."""
    return "tool_" + slug.replace("-", "_")


def export_name(slug: str) -> str:
    """Page export: render{Pascal}Page."""
    camel = kebab_to_camel(slug)
    return "render" + camel[:1].upper() + camel[1:] + "Page"


# Catalog + related for the eight retained Excel scene tools.
TOOLS = [
    {
        "slug": "write-nested-if-formula-for-excel",
        "kind": "nested_if",
        "ymyl": False,
        "category": "developer",
        "topic": "dev-data",
        "related": ["write-ifs-formula-in-excel", "excel-formulas-cheat-sheet"],
        "refs": [
            ("Microsoft IF function", "https://support.microsoft.com/office/if-function-69aed7c9-4e8a-4755-a9bc-aa8bbff73be2"),
        ],
        "xlsx": False,
    },
    {
        "slug": "write-ifs-formula-in-excel",
        "kind": "ifs",
        "ymyl": False,
        "category": "developer",
        "topic": "dev-data",
        "related": ["write-nested-if-formula-for-excel", "wrap-formula-with-ifna"],
        "refs": [
            ("Microsoft IFS function", "https://support.microsoft.com/office/ifs-function-36329a26-37b2-467c-972b-4a39bd951d45"),
        ],
        "xlsx": False,
    },
    {
        "slug": "wrap-formula-with-ifna",
        "kind": "ifna",
        "ymyl": False,
        "category": "developer",
        "topic": "dev-data",
        "related": ["write-nested-if-formula-for-excel", "excel-formulas-cheat-sheet"],
        "refs": [
            ("Microsoft IFNA function", "https://support.microsoft.com/office/ifna-function-6626c961-a569-4285-a007-fd63f707fe24"),
        ],
        "xlsx": False,
    },
    {
        "slug": "write-countif-formula-in-excel",
        "kind": "countif",
        "ymyl": False,
        "category": "developer",
        "topic": "dev-data",
        "related": ["excel-formulas-cheat-sheet", "write-nested-if-formula-for-excel"],
        "refs": [
            ("Microsoft COUNTIF function", "https://support.microsoft.com/office/countif-function-e0de10c6-f885-4e71-abb4-1f464816df34"),
        ],
        "xlsx": False,
    },
    {
        "slug": "excel-formulas-cheat-sheet",
        "kind": "cheat",
        "ymyl": False,
        "category": "developer",
        "topic": "dev-data",
        "related": ["write-nested-if-formula-for-excel", "write-ifs-formula-in-excel"],
        "refs": [
            ("Excel functions (Microsoft)", "https://support.microsoft.com/office/excel-functions-by-category-5f91f4e9-7b42-46d2-9bd1-63f26a86c0eb"),
        ],
        "xlsx": False,
    },
    {
        "slug": "create-invoice-spreadsheet",
        "kind": "invoice",
        "ymyl": True,
        "category": "calculator",
        "topic": "business-finance",
        "related": ["create-budget-spreadsheet", "create-excel-timesheet"],
        "refs": [
            ("ECMA-376 OOXML", "https://www.ecma-international.org/publications-and-standards/standards/ecma-376/"),
            ("SheetJS docs", "https://docs.sheetjs.com/"),
        ],
        "xlsx": True,
    },
    {
        "slug": "create-budget-spreadsheet",
        "kind": "budget",
        "ymyl": True,
        "category": "calculator",
        "topic": "business-finance",
        "related": ["create-invoice-spreadsheet", "create-excel-timesheet"],
        "refs": [
            ("ECMA-376 OOXML", "https://www.ecma-international.org/publications-and-standards/standards/ecma-376/"),
            ("SheetJS docs", "https://docs.sheetjs.com/"),
        ],
        "xlsx": True,
    },
    {
        "slug": "create-excel-timesheet",
        "kind": "timesheet",
        "ymyl": False,
        "category": "calculator",
        "topic": "business-finance",
        "related": ["create-invoice-spreadsheet", "create-budget-spreadsheet"],
        "refs": [
            ("SheetJS docs", "https://docs.sheetjs.com/"),
            ("ECMA-376 OOXML", "https://www.ecma-international.org/publications-and-standards/standards/ecma-376/"),
        ],
        "xlsx": True,
    },
]
