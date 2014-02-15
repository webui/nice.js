#!/usr/bin/env python
'''
Compile Nice.js files to plain JS.

Uses Underscore.js tools to implement some logic in resulting JS.
'''
import os
import sys


def arg_parser(params):
    '''
    Parse named parameters (like --name=1234) and positional parameters.

    Return:
        - (list) args
        - (dict) kwargs
    '''
    args = []
    kwargs = {}
    for param in params:
        try:
            name, value = param.split('=', 1)
            name = name.lstrip('-')
            kwargs[name] = value
        except ValueError:
            args.append(param.lstrip('-'))
    return args, kwargs


def compile_file(source):
    '''Compile file and return result'''
    return source


def compile_files(source_dir, destination_dir):
    '''Compile all '.nicejs' files to '.js' ones'''
    print "List of compiled files:"

    for file_name in os.listdir(source_dir):
        if not file_name.endswith('.nicejs'):
            continue

        file_path = os.path.join(source_dir, file_name)
        file_path_js = os.path.join(destination_dir, file_name.replace('.nicejs', '.js'))
        
        if not os.path.exists(destination_dir):
            print "\tcreated directory: {}".format(destination_dir)
            os.mkdir(destination_dir)

        try:
            with open(file_path) as f:
                result = compile_file(f.read())
            # write resulting '.js' file
            if result:
                with open(file_path_js, 'w+') as f:
                    f.write(result)
            print "\t{} - {}".format(file_name, "OK")
        except Exception, err:
            print "\t{} - {}".format(file_name, err)


def main(source_dir=None, destination_dir=None):
    source_dir = source_dir and os.path.abspath(source_dir) or os.getcwd()
    destination_dir = destination_dir and os.path.abspath(destination_dir) or os.path.join(source_dir, 'js')

    print "Compile Nice.js files:"
    print "\tfrom: {}".format(source_dir)
    print "\t  to: {}".format(destination_dir)
    print ""

    compile_files(source_dir, destination_dir)


if __name__ == "__main__":
    args, kwargs = arg_parser(sys.argv[1:])
    main(*args, **kwargs)
