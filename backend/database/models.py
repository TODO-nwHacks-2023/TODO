from datetime import datetime


class Assignment:
    def __init__(self, identifier: str, name: str, link: str, due_date: datetime, lock_date: datetime, title: str,
                 manual_status: bool, canvas_status: bool, description: str):
        self.id = identifier
        self.name = name
        self.link = link
        self.due_date = due_date
        self.lock_date = lock_date
        self.title = title
        self.manual_status = manual_status
        self.canvas_status = canvas_status
        self.description = description


class AnnouncementMessage:
    def __init__(self, identifier: str, title: str, poster_name: str, course: str, link: str, message: str,
                 post_date: datetime):
        self.id = identifier
        self.title = title
        self.poster_name = poster_name
        self.course = course
        self.link = link
        self.message = message
        self.post_date = post_date
