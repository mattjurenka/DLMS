# Generated by Django 2.0.2 on 2018-04-10 06:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('content_management', '0013_default_data_tags'),
    ]

    operations = [
        migrations.AddField(
            model_name='directory',
            name='catalogers',
            field=models.ManyToManyField(to='content_management.Cataloger'),
        ),
        migrations.AddField(
            model_name='directory',
            name='coverages',
            field=models.ManyToManyField(to='content_management.Coverage'),
        ),
        migrations.AddField(
            model_name='directory',
            name='creators',
            field=models.ManyToManyField(to='content_management.Creator'),
        ),
        migrations.AddField(
            model_name='directory',
            name='keywords',
            field=models.ManyToManyField(to='content_management.Keyword'),
        ),
        migrations.AddField(
            model_name='directory',
            name='languages',
            field=models.ManyToManyField(to='content_management.Language'),
        ),
        migrations.AddField(
            model_name='directory',
            name='subjects',
            field=models.ManyToManyField(to='content_management.Subject'),
        ),
        migrations.AddField(
            model_name='directory',
            name='workareas',
            field=models.ManyToManyField(to='content_management.Workarea'),
        ),
    ]
