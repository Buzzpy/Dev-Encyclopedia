import os
import json
import genanki

# Path json files
path = os.path.join(os.getcwd(), 'src', 'content', 'terms')

# Anki deck file name
anki_deck_file_name = "deck.apkg"

# Path to Anki deck folder
output_path = os.path.join(
    os.getcwd(), 'src', 'content', 'anki_deck')

# Create output folder it not exist
if not os.path.exists(output_path):
    os.makedirs(output_path)

# Create Anki deck model
my_model = genanki.Model(
    1607392319,
    'Simple model for Dev Encyclopedia',
    fields=[
        {'name': 'Question'},
        {'name': 'Answer'},
    ],
    templates=[
        {
            'name': 'Card 1',
            'qfmt': '{{Question}}',
            'afmt': '{{FrontSide}}<hr id="answer">{{Answer}}',
        },
    ])

# Give name and number to Anki deck
my_deck = genanki.Deck(
    2059400110,
    'Dev Encyclopedia')

# Read json files and create notes inside Anki deck
for file_name in os.listdir(path):
    if file_name.endswith('.json'):
        path_to_file = os.path.join(path, file_name)

        # Open and load json file
        with open(path_to_file, 'r', encoding='utf-8') as file:
            # Load file
            data = json.load(file)

            # Include information in Anki note
            my_note = genanki.Note(
                model=my_model,
                fields=[f'What is {data["title"]}?',     # Create question from term name
                        data["description"]["texts"][0]])  # Use description as answer

            # Add to Anki deck
            my_deck.add_note(my_note)

# Write Anki deck and save
genanki.Package(my_deck).write_to_file(
    os.path.join(output_path, anki_deck_file_name))
