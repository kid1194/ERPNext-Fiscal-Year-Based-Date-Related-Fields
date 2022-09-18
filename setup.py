# ERPNext Fiscal Year Based Date Related Fields © 2022
# Author:  Ameen Ahmed
# Company: Level Up Marketing & Software Development Services
# Licence: Please refer to license.txt

from setuptools import setup, find_packages

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

from erpnext_fiscal_year_based_date_related_fields import __version__ as version

setup(
	name='erpnext_fiscal_year_based_date_related_fields',
	version=version,
	description='ERPNext plugin that makes date related fields respect the start and end dates of default fiscal year.',
	author='Ameen Ahmed (Level Up)',
	author_email='kid1194@gmail.com',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
