import os

if __name__ == '__main__':
    submap_pad = "./afbeeldingen"

    bestandsnamen = []

    for bestandsnaam in os.listdir(submap_pad):
        if bestandsnaam.endswith(".jpg") or bestandsnaam.endswith(".png"):
            bestandsnamen.append(bestandsnaam)

    print(bestandsnamen)
