Today's lab will explore using both method_missing and blocks.

Download `tree.rb` from the course website.  Add an `each_node` method
that **takes a block and applies it to every node in the tree** (in
whatever order you desire).  For this to work correctly, you will
most likely need to explicitly name the block.

Once you have that working, use `method_missing` to add support for
fetching the **value on a given path through an arbitrary method name**.
Some examples:

`my_tree.left_left`

`my_tree.left_left_right`

`my_tree.right_left_right`

`my_tree.left_right_left_left_right_left_left_right_left_left_right`

The scan method from the String class may be useful.
