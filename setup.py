from setuptools import setup, find_packages

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

# get version from __version__ variable in erpnext_fiscal_year_based_date_field/__init__.py
from erpnext_fiscal_year_based_date_field import __version__ as version

setup(
	name='erpnext_fiscal_year_based_date_field',
	version=version,
	description='ERPNext app to make date fields respect the default fiscal year, start and end dates',
	author='Ameen Ahmed (Level Up)',
	author_email='levelupye@gmail.com',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
