from django.db import models


class Message(models.Model):
    sender = models.ForeignKey("user_control.CustomUser", related_name="message_sender", on_delete=models.CASCADE)
    receiver = models.ForeignKey("user_control.CustomUser", related_name="message_receiver", on_delete=models.CASCADE)
    message = models.TextField(blank=True, null=True)
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"сообщение между {self.sender.username} и {self.receiver.username}"


class MessageAttachment(models.Model):
    message = models.ForeignKey(Message, related_name="message_attachments", on_delete=models.CASCADE)
    caption = models.CharField(max_length=255, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)