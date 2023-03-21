# phono-differ

## How it works
I made this tool to compare sounds' distinctive features without staring at a chart, which can be tedious. To use it, select sounds from the charts on the page, and their shared features will be listed at the top. When two sounds are selected, you can see which features change between them.

## Hayes chart
The tool uses features from the Hayes (2009) chart provided to our Fall 2021 LING 4040 class at UNT, with the following exceptions (some of which may need correction 🙃):
- [f] and [v] are [+strident].
- [ʟ] is [+lateral].
- The labiodental flap [ⱱ] was missing and has been added.
- The velar approximant [ɰ] was missing and has been added.
- The open-mid central unrounded vowel [ɜ] was missing and has been added. (This may be because it has the exact same features as [ə])
- Some of the "fronted velars" and "backed velars" from the chart are not included - for now.
- If something was missing from the Hayes chart, I made my best guess at its features.
- **I copied the features from the chart by hand, so there are likely mistakes. If you see anything odd, please let me know!**

## Plans / Corrections
I'm still working on it. Still have to add the vowel chart.

I would like to add to this project and make it a good resource for other phono related tasks. If you have any suggestions or catch any errors, please contact me, Joseph McCreary, at ReaganMcCreary@my.unt.edu. Or create an issue on GitHub or submit a pull request. Currently I'm thinking about:
- Show the feature delta when two sounds are selected.
- Syllabic feature, which I just noticed in class is missing from the Hayes chart. (When added, make note of it above)
- Reversing the lookup process, as in, users can set features in order to highlight the cooresponding sounds on the charts.
- Selection of entire rows/columns.
- Ability to play a recording of each sound (ideally with some kind of dropdown to select different speakers).
- Ability to compare **sets** of sounds and select phonological rules.
